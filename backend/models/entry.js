const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  mood: { type: String, default: '' },
  tags: [{ type: String }],
  date: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', EntrySchema);
