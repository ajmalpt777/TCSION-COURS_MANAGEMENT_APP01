const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CourseDb');

const Schema = mongoose.Schema;

const ProfSchema = new Schema({
    name: String,
    email:String,
    password1:String,
    password2:String,
    email:String,
    address:String,
    dob:String,
    hobbies:String,
    mothertongue:String,
    languages:String,
    education:String
    

});

var Profdata = mongoose.model('profdata',ProfSchema);

module.exports = Profdata;