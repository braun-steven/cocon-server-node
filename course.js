/**
 * Created by tak on 8/25/15.
 */
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    id:{type: Number, unique: true},
    course_name:String,
    number_of_assignments:Number,
    max_points:Number,
    course_index:Number,
    has_fixed_points:Boolean,
    nec_percent_to_pass:Number
});

//Enable unique keys
courseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Course', courseSchema);

