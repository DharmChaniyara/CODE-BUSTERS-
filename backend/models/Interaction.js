const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  dealId: { type: Number, required: true },
  type: { type: String, required: true },
  content: { type: String, required: true },
  stakeholderName: { type: String },
  timestamp: { type: String },
  sentiment: { type: String, default: 'neutral' },
  keyTopics: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Interaction', interactionSchema);
