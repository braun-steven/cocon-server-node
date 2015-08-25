var express = require('express');
var router = express.Router();
var mongoDBHelper = require('../mongoDBHelper');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('http://localhost:3000/getCourse?id=5555555 \n http://localhost:3000/getAssignments?id=5555555')
});


/**
 * Insert a new course into the mongodb database
 * @param req
 * @param res
 */
router.post('/insertCourse', function (req, res) {
    var course = req.body;
    console.log('/insertCourse entered');
    mongoDBHelper.addCourse(course);
    res.send("Successfully inserted a new Course: \n"
        + JSON.stringify(course));
    res.end();
});

/**
 * Insert a new assignment into  the sqlite database
 */

router.post('/insertAssignment', function (req, res) {
    var assignment = req.body;
    mongoDBHelper.addAssignment(assignment);
    res.end();
});

router.get('/getCourse', function(req,res){
    var courseId = req.query.id;
    mongoDBHelper.getCourse(courseId, function(err,course){
        if (err) {
            res.send(err);
        } else {
            res.send(course);
        }
        res.end();
    });
});

router.get('/getAssignmentsOfCourse', function(req,res){
    //assignments are specified by their course
    var course_id = req.query.id;
    mongoDBHelper.getAssignmentsOfCourse(course_id, function(err,assignments){
        if(err){
            res.send(err);
        } else {
            res.send(assignments);
        }
        res.end();
    });

});

router.get('/getAllCourses', function(req,res){
    mongoDBHelper.getAllCourses(function(err,courses){
        if(err){
            res.send(err);
        } else {
            res.send(courses);
        }
        res.end();
    });
});

module.exports = router;
