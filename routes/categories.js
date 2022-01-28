const { Router } = require("express");
const express = require("express");
const CategoryController = require("../Controllers/CategoryController");
const router = express.Router();
const { authentication, isAdmin } = require('../middlewares/authentication')

router.post('/',authentication,isAdmin ,CategoryController.create)
router.get('/', CategoryController.getAll)
router.get('/:id', CategoryController.getById)
router.get('/', CategoryController.getOneByName)
router.delete('/:id',authentication, isAdmin, CategoryController.delete)

module.exports = router;