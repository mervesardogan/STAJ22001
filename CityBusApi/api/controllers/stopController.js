// app/controllers/stopController.js
const Stop = require('../models/stopModel');

exports.getAllStops = async (req, res) => {
  try {
    const stops = await Stop.find();
    res.json(stops);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createStop = async (req, res) => {
  const stop = new Stop(req.body);
  try {
    await stop.save();
    res.status(201).json(stop);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStopById = async (req, res) => {
  try {
    const stop = await Stop.findById(req.params.id);
    if (!stop) return res.status(404).send('Stop not found');
    res.json(stop);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateStop = async (req, res) => {
  try {
    const stop = await Stop.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!stop) return res.status(404).send('Stop not found');
    res.json(stop);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteStop = async (req, res) => {
  try {
    const stop = await Stop.findByIdAndDelete(req.params.id);
    if (!stop) return res.status(404).send('Stop not found');
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};