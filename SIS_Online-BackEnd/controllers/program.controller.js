const Program = require('../models/program.model');
const {
    validationResult
} = require('express-validator');

const ProgramMessages = require("../messages/program.messages");
const User = require("../models/user.model");


exports.get = (req, res) => {
    Program.find(req.query, (error, programs) => {
        if (error) throw error;
        let message = ProgramMessages.success.s2;

        if (programs.length < 0)
            message = ProgramMessages.success.s5;

        message.body = programs;
        return res.status(message.http).send(message);
    });
}

exports.create = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    new Program({
        program: req.body.program,
        degree: req.body.degree,
        type: req.body.type,
        sci_field: req.body.sci_field,
        acad_year: req.body.acad_year        
    }).save((error, program) => {
        if (error) throw error;
        let message = ProgramMessages.success.s0;
        message.body = program;
        return res.header("location", "/programs/" + program._id).status(message.http).send(message);
    });

}

exports.update = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Program.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, program) => {
        if (error) throw error;
        if (!program) return res.status(ProgramMessages.error.e0.http).send(ProgramMessages.error.e0);

        let message = ProgramMessages.success.s1;
        message.body = program;
        return res.status(message.http).send(message);

    });
}

exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Program.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(ProgramMessages.error.e0.http).send(ProgramMessages.error.e0);
    });
}

exports.getOne = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Program.findOne({
        _id: req.params.id
    }, (error, program) => {
        if (error) throw error;
        if (!program) return res.status(ProgramMessages.error.e0.http).send(ProgramMessages.error.e0);
        let message = ProgramMessages.success.s2;
        message.body = program;
        return res.status(message.http).send(message);
    });

}

exports.activate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Program.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: true
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(ProgramMessages.error.e0.http).send(ProgramMessages.error.e0);
        return res.status(ProgramMessages.success.s6.http).send(ProgramMessages.success.s6);

    });
}

exports.deactivate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Program.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: false
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(ProgramMessages.error.e0.http).send(ProgramMessages.error.e0);
        return res.status(ProgramMessages.success.s4.http).send(ProgramMessages.success.s4);

    });
}