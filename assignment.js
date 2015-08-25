/**
 * Created by tak on 8/25/15.
 */
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var assignmentSchema = new Schema({
    id:{type: Number, unique: true},
    assignment_index:Number,
    max_points:Number,
    is_extra_assignment:Boolean,
    course_id:Number,
    achieved_points:Number
});

//Enable unique keys
assignmentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Assignment', assignmentSchema);