// app/controllers/scheduleController.js
const Schedule = require('../models/scheduleModel');

exports.getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find().populate('bus').populate('stops');
    res.json(schedules);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createSchedule = async (req, res) => {
  const schedule = new Schedule(req.body);
  try {
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id).populate('bus').populate('stops');
    if (!schedule) return res.status(404).send('Schedule not found');
    res.json(schedule);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!schedule) return res.status(404).send('Schedule not found');
    res.json(schedule);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!schedule) return res.status(404).send('Schedule not found');
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};