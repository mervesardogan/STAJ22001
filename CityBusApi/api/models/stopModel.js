// api/models/stopModel.js
const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
  },
});

module.exports = mongoose.model('Stop', stopSchema);