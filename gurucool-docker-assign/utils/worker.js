const amqp = require('amqplib');

async function startWorker() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  console.log('Worker connected to RabbitMQ');

  const queue = 'queue_global'; // Global queue for all users
  await channel.assertQueue(queue);

  channel.consume(queue, async (msg) => {
    if (msg !== null) {
      const task = JSON.parse(msg.content.toString());
      console.log(`Worker processing task: ${task}`);
      // Simulate task handling
      await new Promise(resolve => setTimeout(resolve, 2000));
      channel.ack(msg);
    }
  });
}

startWorker();
