// api/models/scheduleModel.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' },
  departureTime: {
    type: Date,
    required: true,
  },
  arrivalTime: {
    type: Date,
    required: true,
  },
  stops: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stop' }],
});

module.exports = mongoose.model('Schedule', scheduleSchema);