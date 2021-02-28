const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CourseDb');

const Schema = mongoose.Schema;

const EnrollSchema = new Schema({
    c_name: String,
    c_professor:String,
    p_email:String,
    s_name:String,
    s_email:String,
    s_education:String,
    status:String
    

});

var Enrolldata = mongoose.model('enrolldata',EnrollSchema);

module.exports = Enrolldata;