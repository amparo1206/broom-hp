const { Router } = require("express");
const express = require("express");
const router = express.Router();
const BroomController = require('../Controllers/BroomController');

router.post('/', BroomController.create)
router.get('/', BroomController.getAll)
router.get('/', BroomController.getOneByName)
router.get('/', BroomController.getAllByPrice)
router.put('/:id', BroomController.update)
router.delete('/:id', BroomController.delete)

module.exports = router;