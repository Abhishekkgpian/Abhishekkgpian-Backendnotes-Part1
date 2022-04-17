//MOUNTING IN EXPRESS
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

const userRouter=express.Router();//By this you will make a router
app.use('/user',userRouter); //Here you will set base route,router to use
userRouter.route('/').get(getUser).post(postUser).patch(updateUser).delete(deleteUser) //This is a mini app,when  
// the server will run the backend will check if the after '/user'(as set by userRouter)route has '/' in it.Then 
//the different methods it will check i.e if that is a get request the it will run getUser function.
// By this you will use the different function you have written below in the parenthesis.

userRouter.route('/:id').get(getUserById) //This is filtering by parameters,we are using just'/:id' in the route 
//as '/user' has already been seen by the server in the upper statements

app.get('/user',(req,res)=>{
    res.send(user);
    console.log(req.query);
})
//from here we will create functions for the different methods
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