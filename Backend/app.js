const express = require('express');
const UserData = require('./src/model/userdata');
const ProfData = require('./src/model/profdata');
const CourseData = require('./src/model/coursedata');
const EnrollData = require('./src/model/enrollrequest');


const cors = require('cors');
var bcrypt = require('bcrypt');
var bodyparser = require('body-parser');
const jwt = require('jsonwebtoken'); 
const {  name } = require('ejs');
const app = new express();

app.use(cors());
app.use(bodyparser.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');

app.post('/signup-user',(req,res)=>{
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    console.log(req.body);
    let userData = req.body
    console.log(userData.email1);
    console.log(UserData.exists({email: userData.email1}));
    UserData.exists({email: userData.email1})
    .then(function(docs){
        if(docs){
            
            msg2="exist";
            res.status(200).send({msg2}); 
            console.log("exist");
        }
        else{
            
            var user={
                name:req.body.name1,
                 email:req.body.email1,
                 password1:req.body.password1,
                 password2:req.body.password2
            } 
            var user=new UserData(user);
            user.save();

            msg1="success";
            res.status(200).send({msg1}); 
            console.log("not exist");
        }
    })
})

app.post('/login-user', (req, res) => {
    let userData = req.body
            UserData.findOne({email: userData.username, password1: userData.password})
            .then(function(userdata){
                if(userdata != null){
                    
                    let payload = {subject: userData.username+userData.password}
                    let tokenUser = jwt.sign(payload, 'secretKey')
                    res.status(200).send({tokenUser})  

                }
                else{
                    msg="Try Again";
                    res.status(200).send({msg});
                };
            })     
    })

    app.post('/signup-prof',(req,res)=>{
        res.header("Acess-Control-Allow-Origin","*");
        res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
        console.log(req.body);
        let userData = req.body
        console.log(userData.email1);
        console.log(ProfData.exists({email: userData.email1}));
        ProfData.exists({email: userData.email1})
        .then(function(docs){
            if(docs){
                
                msg2="exist";
                res.status(200).send({msg2}); 
                console.log("exist");
            }
            else{
                
                var user={
                    name:req.body.name1,
                     email:req.body.email1,
                     password1:req.body.password1,
                     password2:req.body.password2
                } 
                var user=new ProfData(user);
                user.save();
    
                msg1="success";
                res.status(200).send({msg1}); 
                console.log("not exist");
            }
        })
    })

    app.post('/login-prof', (req, res) => {
        let userData = req.body
                ProfData.findOne({email: userData.username, password1: userData.password})
                .then(function(userdata){
                    if(userdata != null){
                        
                        let payload = {subject: userdata.username+userdata.password}
                        let tokenProf = jwt.sign(payload, 'secretKey')
                        res.status(200).send({tokenProf})  
    
                    }
                    else{
                        msg="Try Again";
                        res.status(200).send({msg});
                    };
                })     
        })

        app.get('/user-profile/:id',(req,res)=>{
            const id=req.params.id;
            UserData.find({"email":id})
            .then((profile)=>{
                res.send(profile);
            })
    })

    app.get('/user-profileone/:id',(req,res)=>{
        const id=req.params.id;
        console.log(id);
        UserData.findOne({"_id":id})
        .then((profile)=>{
            res.send(profile);
        })
})


    app.put('/edit-user',(req,res)=>{
        console.log(req.body)
        id=req.body._id,
             tname= req.body.name,
             email= req.body.email,
             address= req.body.address,
             dob= req.body.dob,
             mothertongue= req.body.mothertongue,
             languages= req.body.languages,
             hobbies= req.body.hobbies,
             education= req.body.education
       UserData.findByIdAndUpdate({"_id":id},
                                    {$set:{
                                    "name":tname,
                            "email":email,
                            "address":address,
                            "dob":dob,
                            "mothertongue":mothertongue,
                        "hobbies":hobbies,
                        "education":education,
                        "languages":languages
                    }})
       .then(function(){
           res.send();
       })
     })



     app.get('/prof-profile/:id',(req,res)=>{
        const id=req.params.id;
        ProfData.find({"email":id})
        .then((profile)=>{
            res.send(profile);
        })
})

app.get('/prof-profileone/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    ProfData.findOne({"_id":id})
    .then((profile)=>{
        res.send(profile);
    })
})


app.put('/edit-prof',(req,res)=>{
    console.log(req.body)
    id=req.body._id,
         tname= req.body.name,
         email= req.body.email,
         address= req.body.address,
         dob= req.body.dob,
         mothertongue= req.body.mothertongue,
         languages= req.body.languages,
         hobbies= req.body.hobbies,
         education= req.body.education
   ProfData.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "name":tname,
                        "email":email,
                        "address":address,
                        "dob":dob,
                        "mothertongue":mothertongue,
                    "hobbies":hobbies,
                    "education":education,
                    "languages":languages
                }})
   .then(function(){
       res.send();
   })
 })

 app.post('/course-add',function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    console.log(req.body);
    var course={
         name: req.body.name,
         image: req.body.image,
         professor: req.body.professor,
         email: req.body.email,
         details: req.body.details,
         duration: req.body.duration,
         
    }
    var course=new CourseData(course);
    course.save();
});

app.get('/courses-taken/:id', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');
    id = req.params.id;
    console.log(id);
    CourseData.find({"email":id}).then (function(courses){
        res.send(courses);
    });
});

app.get('/all-courses', function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    CourseData.find().sort({$natural: -1}).then (function(courses){
        res.send(courses);
    });
});

app.get('/course-details/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);
    CourseData.find({"_id":id})
    .then((course)=>{
        res.send(course);
    })
})

app.post('/enroll-course',function(req,res){
    res.header("Acess-Control-Allow-Origin","*");
    res.header('Acess-Control-Allow-Methods : GET,POST,PUT,DELETE');

    console.log(req.body);
    var item={
         c_name: req.body.c_name,
         c_professor: req.body.c_professor,
         p_email: req.body.p_email,
         s_name: req.body.s_name,
         s_email: req.body.s_email,
         s_education:req.body.s_education,
         status:req.body.status      
    }
    var item=new EnrollData(item);
    item.save();
});

app.get('/enroll-status',(req,res)=>{
    
    c_name=req.body.c_name,
    p_email= req.body.p_email,
    s_email= req.body.s_email,  

    EnrollData.find({"c_name":c_name,"p_email":p_email,"s_email":s_email})
    .then((status)=>{
        res.send(status);
    })
})



app.listen(3000);