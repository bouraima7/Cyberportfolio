const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
const projectRoutes = require('./routes/projectRoutes');
app.use('/api/projects', projectRoutes);


app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/cyberportfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Basic route
app.get('/', (req, res) => {
  res.send('Cyber Portfolio Backend');
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
