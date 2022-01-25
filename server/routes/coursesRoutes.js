
const express = require('express');
const coursesMiddleware = require('../middlewares/middleware')
const coursesController = require('../controllers/coursesController')
const router =  express.Router();

router.post('/create', coursesMiddleware.validateCourse ,coursesController.createCourse)

router.get('/get',coursesController.getCourses)

router.get('/get/:id', coursesController.getSingleCourse)

router.put('/update/:id', coursesController.updateCourse)

router.delete('/delete/:id', coursesController.deleteCourse)

module.exports = router
