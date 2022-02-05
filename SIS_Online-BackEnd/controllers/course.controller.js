const Course = require('../models/course.model');
const {
    validationResult
} = require('express-validator');


const CourseMessages = require("../messages/course.messages");
const User = require("../models/user.model");


exports.get = (req, res) => {
    Course.find(req.query, (error, courses) => {
        if (error) throw error;
        let message = CourseMessages.success.s2;

        if (courses.length < 0)
            message = CourseMessages.success.s5;

        message.body = courses;
        return res.status(message.http).send(message);
    });
}

exports.create = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    new Course({
        course: req.body.course,
        semester: req.body.semester,
        credits: req.body.credits,
        sci_field: req.body.sci_field
    }).save((error, course) => {
        if (error) throw error;
        let message = CourseMessages.success.s0;
        message.body = course;
        return res.header("location", "/courses/" + course._id).status(message.http).send(message);
    });

}

exports.update = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Course.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, course) => {
        if (error) throw error;
        if (!course) return res.status(CourseMessages.error.e0.http).send(CourseMessages.error.e0);

        let message = CourseMessages.success.s1;
        message.body = course;
        return res.status(message.http).send(message);

    });
}

exports.delete = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Course.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(CourseMessages.error.e0.http).send(CourseMessages.error.e0);

    });
}

exports.getOne = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Course.findOne({
        _id: req.params.id
    }, (error, course) => {
        if (error) throw error;
        if (!course) return res.status(CourseMessages.error.e0.http).send(CourseMessages.error.e0);
        let message = CourseMessages.success.s2;
        message.body = course;
        return res.status(message.http).send(message);
    });

}

exports.activate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Course.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: true
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(CourseMessages.error.e0.http).send(CourseMessages.error.e0);
        return res.status(CourseMessages.success.s6.http).send(CourseMessages.success.s6);

    });
}

exports.deactivate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Course.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: false
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(CourseMessages.error.e0.http).send(CourseMessages.error.e0);
        return res.status(CourseMessages.success.s4.http).send(CourseMessages.success.s4);

    });
}