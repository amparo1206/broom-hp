const { Router } = require("express");
const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/UserController');

router.post('/', UserController.create)

module.exports = router;