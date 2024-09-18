const express = require('express');
const connectDB = require('./config/db');
const { register, login } = require('./controllers/authController');
const { enqueueTask, processTasks } = require('./controllers/queueController');
const authenticateToken = require('./middleware/auth');

const app = express();
connectDB();

app.use(express.json());

app.post('/register', register);
app.post('/login', login);
app.post('/enqueue', authenticateToken, enqueueTask);
app.get('/process', authenticateToken, processTasks);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
