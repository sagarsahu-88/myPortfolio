require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// NOTE: User needs to provide MONGODB_URI in .env
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Schemas
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  link: String,
  image: String
});

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Project = mongoose.model('Project', ProjectSchema);
const Message = mongoose.model('Message', MessageSchema);

// Routes
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    // Return mock data if DB is empty for demo purposes
    if (projects.length === 0) {
      return res.json([
        {
          title: "E-Commerce Platform",
          description: "A full-featured online store with cart and payment integration.",
          technologies: ["React", "Node.js", "MongoDB", "Stripe"],
          link: "#",
          image: "https://via.placeholder.com/300"
        },
        {
          title: "Task Management App",
          description: "Real-time task tracker with team collaboration features.",
          technologies: ["MERN", "Socket.io", "Redux"],
          link: "#",
          image: "https://via.placeholder.com/300"
        }
      ]);
    }
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
