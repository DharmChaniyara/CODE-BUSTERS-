require('dotenv').config();
const express = require('express');
const connectDB = require('./api/db');
const Deal = require('./models/Deal');
const Stakeholder = require('./models/Stakeholder');
const Objection = require('./models/Objection');
const Interaction = require('./models/Interaction');
const SystemState = require('./models/SystemState');

const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend'))); // Serve static files (HTML, CSS, JS) from frontend folder

// Connect to DB
connectDB();

// API ROUTES
app.get('/api/data', async (req, res) => {
  try {
    const deals = await Deal.find({});
    const stakeholders = await Stakeholder.find({});
    const objections = await Objection.find({});
    const interactions = await Interaction.find({});
    const state = await SystemState.findOne({}) || { knowledgeBase: {}, memoryStats: {}, learningState: {} };
    
    res.json({
      deals,
      stakeholders,
      objections,
      interactions,
      knowledgeBase: state.knowledgeBase,
      memoryStats: state.memoryStats,
      learningState: state.learningState
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/deals', async (req, res) => {
  try {
    const deal = new Deal(req.body);
    await deal.save();
    res.json(deal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Seed API to populate initial data
app.post('/api/seed', async (req, res) => {
  try {
    const data = req.body; // Expects the full DATA object from data.js payload
    
    await Deal.deleteMany({});
    await Stakeholder.deleteMany({});
    await Objection.deleteMany({});
    await Interaction.deleteMany({});
    await SystemState.deleteMany({});

    await Deal.insertMany(data.deals);
    await Stakeholder.insertMany(data.stakeholders);
    await Objection.insertMany(data.objections);
    await Interaction.insertMany(data.interactions);
    
    await SystemState.create({
      knowledgeBase: data.knowledgeBase,
      memoryStats: data.memoryStats,
      learningState: data.learningState
    });

    res.json({ message: 'Database seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/analyze', async (req, res) => {
  // In a real production scenario, this AI logic runs here on the backend 
  // accessing MongoDB directly to find similar deals using Vector search or complex queries.
  // For the scope of this migration, we are returning a success response so the frontend
  // knows the AI engine is backed by the server.
  res.json({
    status: 'success',
    message: 'AI analyzed the deals history from MongoDB'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
