/**
 * Created by tak on 8/25/15.
 */
/**
 * Init the database with schemes
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Course = require('./course.js');
var Assignment = require('./assignment.js');

module.exports.addCourse = function (courseJSON) {
    //Create course object from courseschema to insert into db
    var course = new Course(courseJSON);

    //Save course
    course.save(function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Saved: " + JSON.stringify(courseJSON));
        }
    });
};

module.exports.addAssignment = function (assignmentJSON) {
    var assignment = new Assignment(assignmentJSON);

    //save assignment
    assignment.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Saved assigment : " + JSON.stringify(assignmentJSON))
        }
    });
};

module.exports.getCourse = function (course_id, callback) {
    console.log("Query id is: " + course_id);
    Course.findOne({id: course_id}, function (err, course) {
        callback(err,course);
    });
};

module.exports.getAssignmentsOfCourse = function (course_id, callback) {
    Assignment.find({id: course_id}, function(err, assignments){
        callback(err,assignments);
    });
};

module.exports.updateCourse = function (course) {

};

module.exports.updateAssignment = function (assignment) {

};

module.exports.deleteCourse = function (course_id) {

};

module.exports.deleteAssignment = function () {

};

module.exports.getAllCourses = function (callback) {
    Course.find({}, function(err, courses){
        callback(err, courses);
    })
};


