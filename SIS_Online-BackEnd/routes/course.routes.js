const express = require('express');
let router = express.Router();
const CourseController = require('../controllers/course.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get( CourseController.get)
    .post([body('course').isString(),
        body('semester').isString(),
        body('credits').isString(),
        body('sci_field').isString()
    ], CourseController.create)

router.route('/:id')
    .get( [param("id").isMongoId()], CourseController.getOne)
    .put( [param("id").isMongoId()], CourseController.update)
    .delete( [param("id").isMongoId()], CourseController.delete);

module.exports = router;