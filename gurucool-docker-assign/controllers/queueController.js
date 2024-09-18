const amqp = require('amqplib');

let channel, connection;
async function connectRabbitMQ() {
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    console.log('Connected to RabbitMQ');
  } catch (error) {
    console.error('RabbitMQ connection error:', error);
  }
}

connectRabbitMQ();

exports.enqueueTask = async (req, res) => {
  const { task } = req.body;
  const queue = `queue_${req.user.id}`;
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(task)));
  res.json({ message: 'Task enqueued successfully' });
};

exports.processTasks = async (req, res) => {
  const queue = `queue_${req.user.id}`;
  await channel.assertQueue(queue);
  
  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const task = JSON.parse(msg.content.toString());
      console.log(`Processing task: ${task}`);
      // Simulate task processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      channel.ack(msg);
    }
  });
  res.json({ message: 'Processing tasks' });
};
