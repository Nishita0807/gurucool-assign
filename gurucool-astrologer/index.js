const express = require('express');
const app = express();
const astrologerRoutes = require('./routes/astrologerRoutes');

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.use('/api', astrologerRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
