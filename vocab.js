/**
 * Created by tak on 8/25/15.
 */

//Column names: common
module.exports.KEY_ID = "id";

//Column names: courses
module.exports.KEY_COURSENAME = "course_name";
module.exports.KEY_NUMBER_OF_ASSIGNMENTS = "number_of_assignments";
module.exports.KEY_MAX_POINTS_COURSE = "reachable_points_per_assignment";
module.exports.KEY_COURSE_INDEX = "course_index";
module.exports.KEY_HAS_FIXED_POINTS = "has_fixed_points";
module.exports.KEY_NEC_PERCENT_TO_PASS = "nec_percent_to_pass";

//Column names: assignments
module.exports.KEY_INDEX = "assignment_index";
module.exports.KEY_MAX_POINTS = "max_points";
module.exports.KEY_ACHIEVED_POINTS = "achieved_points";
module.exports.KEY_IS_EXTRA_ASSIGNMENT = "is_extra_assignment";
module.exports.KEY_COURSE_ID = "course_id";

/**
 * This is never used but shows the order of the
 * course/assignments Schema coming from the Android application
 * @type {string}
 */
//Table create statements
module.exports.CREATE_COURSE_TABLE = "CREATE TABLE if not exists " + TABLE_COURSES + "("
    + KEY_ID + " INTEGER PRIMARY KEY,"
    + KEY_COURSENAME + " TEXT,"
    + KEY_NUMBER_OF_ASSIGNMENTS + " INTEGER,"
    + KEY_MAX_POINTS_COURSE + " REAL,"
    + KEY_COURSE_INDEX + " INTEGER,"
    + KEY_HAS_FIXED_POINTS + " INTEGER,"
    + KEY_NEC_PERCENT_TO_PASS + " REAL DEFAULT 0.5)";


module.exports.CREATE_ASSIGNMENT_TABLE = "CREATE TABLE if not exists " + TABLE_ASSIGNMENTS + "("
    + KEY_ID + " INTEGER PRIMARY KEY,"
    + KEY_INDEX + " INTEGER,"
    + KEY_MAX_POINTS + " REAL,"
    + KEY_IS_EXTRA_ASSIGNMENT + " INTEGER,"
    + KEY_COURSE_ID + " INTEGER,"
    + KEY_ACHIEVED_POINTS + " REAL,"
    + "FOREIGN KEY(" + KEY_COURSE_ID + ") REFERENCES " + TABLE_COURSES + "(" + KEY_COURSE_ID + "))";
