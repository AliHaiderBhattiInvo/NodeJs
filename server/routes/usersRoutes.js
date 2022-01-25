const express = require('express');
const router =  express.Router();

const usersController = require('../controllers/usersController')

router.get('/get', usersController.getUsers)

router.post('/create', usersController.createUser)

router.delete('/delete/:id', usersController.deleteUser)

module.exports = router

