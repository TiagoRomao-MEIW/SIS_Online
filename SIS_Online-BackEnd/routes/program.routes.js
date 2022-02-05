const express = require('express');
let router = express.Router();
const ProgramController = require('../controllers/program.controller');
const {
    body,
    param,
    sanitizeBody
} = require('express-validator');
const AuthController = require("../controllers/auth.controller");

router.route('/')
    .get( ProgramController.get)
    .post([body('program').isString(),
        body('degree').isString(),
        body('type').isString(),
        body('sci_field').isString(),
        body('acad_year').isString()
    ], ProgramController.create)



router.route('/:id')
    .get( [param("id").isMongoId()], ProgramController.getOne)
    .put( [param("id").isMongoId()], ProgramController.update)
    .delete( [param("id").isMongoId()], ProgramController.delete);

module.exports = router;