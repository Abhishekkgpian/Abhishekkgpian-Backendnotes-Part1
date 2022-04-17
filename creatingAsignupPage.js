//Creating a signUp page
const express = require('express');
const app = express();             
                                   
app.listen(3000)                   
app.use(express.json());          
let user=[
    {
        'id':1,
        'Name':"Abhishek Thakur"
    },
    {
        'id':2,
        'Name':"Abhishek Kumar"
    }
];

const userRouter=express.Router();
const authRouter=express.Router();//initializing authRouter
app.use('/user',userRouter); 
app.use('/auth',authRouter); //initializing authRouter
userRouter.route('/').get(getUser).post(postUser).patch(updateUser).delete(deleteUser) 

userRouter.route('/:id').get(getUserById) 

app.get('/user',(req,res)=>{
    res.send(user);
    console.log(req.query);
})

function getUser(req,res){
    res.send(user);
}
function postUser(req,res){
    user=req.body;
    console.log(req.body);
    res.json({message:"Data recieved successfully",user:req.body});
}
function updateUser(req,res){
    console.log(req.body,"This needs to be updated");
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        user[key]=dataToBeUpdated[key];
    }
    res.json({message:"Data updated successfully",user:req.body});
}
function deleteUser(req,res){
    user={};
    res.json({message:"Data has been deleted successfully"});
}
function getUserById(req,res){
    console.log(req.params.id);
    res.send(user[req.params.id-1]);
}
authRouter.route('/signUp').get(getSignUp).post(PostSignUp)//initializing authRouter
function getSignUp(req,res){
    res.sendFile('/public/index.html',{root:__dirname});
}
function PostSignUp(req,res){
    let obj=req.body;
    console.log('backend obj',obj);
    res.json({
        message:"user signedUp",
        data:obj
    });
}