const mongoose = require('mongoose');

const systemStateSchema = new mongoose.Schema({
  knowledgeBase: { type: Object, default: {} },
  memoryStats: { type: Object, default: {} },
  learningState: { type: Object, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('SystemState', systemStateSchema);
