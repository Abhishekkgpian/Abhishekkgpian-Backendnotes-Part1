//using mongoDb
//Using mongoose.Note:There is an official documentation of mongoose you can refer https://mongoosejs.com/docs/queries.html
const express = require('express');
const { create } = require('lodash');
const { default: mongoose } = require('mongoose');//setting up mongoose       
const app = express();             
//const mongoose=require('mongoose');                           
app.listen(3000)                   
app.use(express.json());     
const userRouter=express.Router();
const authRouter=express.Router();
app.use('/user',userRouter); 
app.use('/auth',authRouter); 
let user=[{name
    :
    "Navneet",
    email
    :
    "abcd@gmail.com",
    password
    :
    "12345678",
    confirmPassword
    :
    "12345678"}];
userRouter.route('/').get(getUsers).post(postUser).patch(updateUser).delete(deleteUser) 

userRouter.route('/:id').get(getUserById) 

app.get('/user',(req,res)=>{ 
     res.send(user);
   console.log(req.query);
   
})

async function getUsers(req,res){
    let allUsers=await userModel.find();//This will give you all data under usermodel
   // let allUsers=await userModel.find({email:'abc@gmail.com'});//By this way you can filter the data
    res.json({
        message:"This is the list of the user",
        data:allUsers
    });
}
function postUser(req,res){
    user=req.body;
    console.log(req.body);
    res.json({message:"Data recieved successfully",user:req.body});
}
async function updateUser(req,res){
 let dataToBeUpdated=req.body;
 let user=await userModel.findOneAndUpdate({password:'12345678'},dataToBeUpdated);//Update data in dataBase using mongoose
 res.json({message:"updated successfully",data:user});
}
async function deleteUser(req,res){
    let dataToBeUpdated=res.body;
   let user=await userModel.findOneAndDelete(dataToBeUpdated)//Delete data in dataBase using mongoose
    res.json({message:"Data has been deleted successfully",data:user});
}
function getUserById(req,res){
    console.log(req.params.id);
    res.send(user[req.params.id-1]);
}
authRouter.route('/signUp').get(getSignUp).post(PostSignUp) 


function getSignUp(req,res){    
  
  res.sendFile('/public/index.html',{root:__dirname}); 
    
}
async function PostSignUp(req,res){
    let dataObj=req.body;    //from the signup page we are taking the res.body and storing in dataObj
    let user=await userModel.create(dataObj);//poting dataObj in mongoDb
    console.log(user);
    res.json({
        data:user
    });
}
const db_link='mongodb+srv://admin:.Mt6pgf-C8vPMJc@cluster0.inxkt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(db_link).then(function(db){ //connecting mongoDb server
    console.log("Database connected")
}).catch(function(err){
console.log(err);
});
const userSchema=mongoose.Schema({ //defining schema for mongoose 
    name:{
        type:String,
        required:true
    },
    email:{
        type:String, //this will set the input type to string
        required:true,//this will set the input to be required
        unique:true //this will set the input to be unique i.e no two user with same email can exist
    },
    password:{
        type:String,
        required:true ,
        minLength:8    //setting up minimum length of the string 
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:8
    }
});
//generating model
const userModel=mongoose.model('userModel',userSchema); //first parameter is name of the model and 2nd para is schema.
// (async function createUser(){ //adding data into dataBase using models  //This is a code not a note! 
//     let user={                                                          //This is a code not a note!  
//         name:'Abhishek Thakur',                                         //This is a code not a note!      
//         email:'abcadd@gmail.com',                                       //This is a code not a note!      
//         password:'12345678',                                            //This is a code not a note!    
//         confirmPassword:'12345678'                                      //This is a code not a note!        
//     };                                                                  //This is a code not a note!
//     let data= await userModel.create(user);                             //This is a code not a note!                                 
//     console.log(data);                                                  //This is a code not a note!            
                                                                           //This is a code not a note!
// })();                                                                   //This is a code not a note!