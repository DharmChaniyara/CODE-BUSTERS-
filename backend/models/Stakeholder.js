const mongoose = require('mongoose');

const stakeholderSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  dealId: { type: Number, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  influenceLevel: { type: String, default: 'Influencer' },
  concerns: [{ type: String }],
  sentiment: { type: String, default: 'Neutral' },
  engagementScore: { type: Number, default: 50 },
  lastContact: { type: String },
  email: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Stakeholder', stakeholderSchema);
