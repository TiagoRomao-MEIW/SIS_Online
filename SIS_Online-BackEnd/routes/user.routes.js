const express = require('express');
let router = express.Router();
const UserController = require('../controllers/user.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const CONFIG = require("../config/config");
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .post([body('name').isString(),
        body('type').isAlpha(),
        body('birth_date').isISO8601(),
        body('NIF').isString(),
        body('BI').isString(),
        body('university').isString(),
        body('college').isString(),
        body('campus').isString(),
        body('auth.username').isAlphanumeric(),
        body('auth.password').isString(),
        body('programID.*').isString(),
        body('courseID.*').isMongoId(),
        sanitizeBody('name').whitelist(CONFIG.sanitize.alphabet),
    ], UserController.create)
    .get( UserController.get);



router.route('/:id')
    .get( [param("id").isMongoId()], UserController.getOne)
    .put( [param("id").isMongoId()], UserController.update)
    .delete( [param("id").isMongoId()], UserController.delete);

module.exports = router;