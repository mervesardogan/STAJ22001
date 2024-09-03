// api/models/buModel.js
const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  route: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  stops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stop' }],
  schedules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' }],
});

module.exports = mongoose.model('Bus', busSchema);