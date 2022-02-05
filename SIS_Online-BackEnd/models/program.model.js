const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CONFIG = require('../config/config');

const programSchema = new Schema({
    program: String,
    degree: String,
    type: String,
    sci_field: String,
    acad_year: String //,courses: [{type: String,ref: CONFIG.mongodb.collections.course}],
});

module.exports = global.mongoConnection.model(CONFIG.mongodb.collections.program, programSchema);