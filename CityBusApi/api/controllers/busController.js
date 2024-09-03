// app/controllers/busController.js
const Bus = require('../models/busModel');

exports.getAllBuses = async (req, res) => {
  try {
    const buses = await Bus.find().populate('stops').populate('schedules');
    res.json(buses);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createBus = async (req, res) => {
  const bus = new Bus(req.body);
  try {
    await bus.save();
    res.status(201).json(bus);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id).populate('stops').populate('schedules');
    if (!bus) return res.status(404).send('Bus not found');
    res.json(bus);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!bus) return res.status(404).send('Bus not found');
    res.json(bus);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    if (!bus) return res.status(404).send('Bus not found');
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};