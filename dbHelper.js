/**
 * Created by tak on 8/24/15.
 */

/**
 * Key Values
 */

//Logcat tag
var LOG = "DatabaseHelper";

//Database version
var DATABASE_VERSION = 9;

//Database name
var DATABASE_NAME = "courses";

//Table names
var TABLE_COURSES = "courses";
var TABLE_ASSIGNMENTS = "assignments";

//Column names: common
var KEY_ID = "id";

//Column names: courses
var KEY_COURSENAME = "course_name";
var KEY_NUMBER_OF_ASSIGNMENTS = "number_of_assignments";
var KEY_MAX_POINTS_COURSE = "reachable_points_per_assignment";
var KEY_COURSE_INDEX = "course_index";
var KEY_HAS_FIXED_POINTS = "has_fixed_points";
var KEY_NEC_PERCENT_TO_PASS = "nec_percent_to_pass";

//Table create statements
var CREATE_COURSE_TABLE = "CREATE TABLE if not exists " + TABLE_COURSES + "("
    + KEY_ID + " INTEGER PRIMARY KEY,"
    + KEY_COURSENAME + " TEXT,"
    + KEY_NUMBER_OF_ASSIGNMENTS + " INTEGER,"
    + KEY_MAX_POINTS_COURSE + " REAL,"
    + KEY_COURSE_INDEX + " INTEGER,"
    + KEY_HAS_FIXED_POINTS + " INTEGER,"
    + KEY_NEC_PERCENT_TO_PASS + " REAL DEFAULT 0.5)";


//Column names: assignments
var KEY_INDEX = "assignment_index";
var KEY_MAX_POINTS = "max_points";
var KEY_ACHIEVED_POINTS = "achieved_points";
var KEY_IS_EXTRA_ASSIGNMENT = "is_extra_assignment";
var KEY_COURSE_ID = "course_id";


var CREATE_ASSIGNMENT_TABLE = "CREATE TABLE if not exists " + TABLE_ASSIGNMENTS + "("
    + KEY_ID + " INTEGER PRIMARY KEY,"
    + KEY_INDEX + " INTEGER,"
    + KEY_MAX_POINTS + " REAL,"
    + KEY_IS_EXTRA_ASSIGNMENT + " INTEGER,"
    + KEY_COURSE_ID + " INTEGER,"
    + KEY_ACHIEVED_POINTS + " REAL,"
    + "FOREIGN KEY(" + KEY_COURSE_ID + ") REFERENCES " + TABLE_COURSES +"("+ KEY_COURSE_ID+"))";

var dbPath = 'mydb.db';
var sqlite3 = require('sqlite3').verbose();
/**
 * Init the database with create table
 */

module.exports.onCreateDB = function() {
    var db = new sqlite3.Database(dbPath);
    db.serialize(function () {
        db.run(CREATE_COURSE_TABLE);
        db.run(CREATE_ASSIGNMENT_TABLE);
    });
    db.close();
};

module.exports.addCourse = function(course){
    var db = new sqlite3.Database(dbPath);
    db.serialize(function(){
        /*
        Order of insertArray elements is important
         */
        var insertArray = [
            course[KEY_ID],
            course[KEY_COURSENAME],
            course[KEY_NUMBER_OF_ASSIGNMENTS],
            course[KEY_MAX_POINTS_COURSE],
            course[KEY_COURSE_INDEX],
            course[KEY_HAS_FIXED_POINTS],
            course[KEY_NEC_PERCENT_TO_PASS]
        ];
        //Count of '?' must be equal to insertArray.length
        db.run("INSERT into " + TABLE_COURSES + " VALUES (?,?,?,?,?,?,?)", insertArray);
        console.log("Added new course: " + course[KEY_COURSENAME]);
    });
    db.close();
};

module.exports.addAssignment = function(assignment){
    var db = new sqlite3.Database(dbPath);
    db.serialize(function(){
        /*
         Order of insertArray elements is important
         */
        var insertArray = [
            assignment[KEY_ID],
            assignment[KEY_INDEX],
            assignment[KEY_MAX_POINTS],
            assignment[KEY_IS_EXTRA_ASSIGNMENT],
            assignment[KEY_COURSE_ID],
            assignment[KEY_ACHIEVED_POINTS]
        ];
        //Count of '?' must be equal to insertArray.length
        db.run("INSERT into " + TABLE_ASSIGNMENTS + " VALUES (?,?,?,?,?,?)", insertArray);
        console.log("Added new assignment: "+ assignment[KEY_ID]);
    });
    db.close();
};

module.exports.getCourse = function(course_id){

};

module.exports.getAssignmentsOfCourse = function(course_id){

};

module.exports.updateCourse = function(course){

};

module.exports.updateAssignment = function(assignment){

};

module.exports.deleteCourse = function(course_id){

};

module.exports.deleteAssignment = function(){

};

module.exports.getAllCourses = function(){

};


