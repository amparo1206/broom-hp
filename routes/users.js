const { Router } = require("express");
const express = require("express");
const router = express.Router();
const UserController = require('../Controllers/UserController');
const {authentication} = require ('../middlewares/authentication')

router.post('/', UserController.create)
router.put('/:id', authentication, UserController.update )
router.delete('/:id', authentication, UserController.delete)
router.post('/:login', UserController.login)
module.exports = router;