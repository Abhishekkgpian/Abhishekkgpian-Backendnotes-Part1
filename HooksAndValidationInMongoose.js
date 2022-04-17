//Hooks in mongoose
//validating email and matching password with confirm password
const express = require('express');
const { create } = require('lodash');
const { default: mongoose } = require('mongoose');   
const emailValidator=require('email-validator'); //Initializing email validator
const app = express();             
const userSchema=mongoose.Schema({  
    name:{
        type:String,
        required:true
    },
    email:{
        type:String, 
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email); //Validating email address with the help of email validator
        } 
    },
    password:{
        type:String,
        required:true ,
        minLength:8     
    },
    confirmPassword:{
        type:String,
        required:true,
        minLength:8,
        validate:function(){
            return(this.confirmPassword==this.password); //validating if the password matches with confirm password
        } 
    }
});

const userModel=mongoose.model('userModel',userSchema);
// userSchema.pre('save', function() {  //It will run before the data is saved into dataBase
//     console.log("This process will be followed before the data is going to be saved in mongoDb",this);//we can access the data 
//     //through writing this
    
//   });                          
// userSchema.post('save', function(doc) {  //It will run after data is saved into dataBase,also we will get the data under doc
//     console.log("This process will run after data is saved in data Base",doc);
    
//   });                          
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
    let allUsers=await userModel.find();
 
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
 let user=await userModel.findOneAndUpdate({password:'12345678'},dataToBeUpdated);
 res.json({message:"updated successfully",data:user});
}
async function deleteUser(req,res){
    let dataToBeUpdated=res.body;
   let user=await userModel.findOneAndDelete(dataToBeUpdated) 
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

const db_link='mongodb+srv://admin:.Mt6pgf-C8vPMJc@cluster0.inxkt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(db_link).then(function(db){
    console.log("Database connected")
}).catch(function(err){
console.log(err);
});

  async function PostSignUp(req,res){
    let dataObj=req.body;   
    let user=await userModel.create(dataObj);
    console.log(user);
    res.json({
        data:user
    });
}
userSchema.pre('save',function(){
    this.confirmPassword=undefined; //if anything is made undefined then it will not be saved in the dataBase
});