// api/routes/busRoutes.js
const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

router.get('/', busController.getAllBuses);
router.post('/', busController.createBus);
router.get('/:id', busController.getBusById);
router.patch('/:id', busController.updateBus);
router.delete('/:id', busController.deleteBus);

module.exports = router;