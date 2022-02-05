const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const courseSchema = new Schema({
    course: String,
    semester: String,
    credits: String,
    sci_field: String
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.course, courseSchema);