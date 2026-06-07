const mongoose = require('mongoose');

const objectionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  dealId: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  resolution: { type: String, default: 'Pending resolution' },
  outcome: { type: String, default: 'unresolved' },
  raisedDate: { type: String },
  resolvedDate: { type: String, default: null },
  historicalSuccessRate: { type: Number, default: 50 },
  severity: { type: String, default: 'Medium' }
}, { timestamps: true });

module.exports = mongoose.model('Objection', objectionSchema);
