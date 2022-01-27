const { Router } = require("express");
const express = require("express");
const router = express.Router();
const BroomController = require('../Controllers/BroomController');

router.get('/', BroomController.getAll)
router.get('/', BroomController.getOneByName)
router.get('/', BroomController.getAllByPrice)

module.exports = router;