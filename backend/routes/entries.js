const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Entry = require('../models/Entry');

// Get all entries
router.get('/', auth, async (req, res) => {
  const entries = await Entry.find({ user: req.user.id }).sort({ date: -1 });
  res.json(entries);
});

// Create entry
router.post('/', auth, async (req, res) => {
  try {
    const entry = new Entry({ ...req.body, user: req.user.id });
    await entry.save();
    res.json(entry);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete entry
router.delete('/:id', auth, async (req, res) => {
  await Entry.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ msg: 'Deleted' });
});

// Update entry
router.put('/:id', auth, async (req, res) => {
  const entry = await Entry.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body, { new: true }
  );
  res.json(entry);
});

module.exports = router;
