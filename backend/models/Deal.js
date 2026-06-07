const mongoose = require('mongoose');

const dealSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  company: { type: String, required: true },
  industry: { type: String, required: true },
  value: { type: Number, required: true },
  stage: { type: String, default: 'Discovery' },
  status: { type: String, default: 'active' },
  outcome: { type: String, default: null },
  winProbability: { type: Number, default: 50 },
  dealCycleDays: { type: Number, default: 0 },
  createdDate: { type: String },
  closeDate: { type: String, default: null },
  description: { type: String },
  keyFactors: [{ type: String }],
  tags: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Deal', dealSchema);
