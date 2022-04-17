//MIDDLEWARE FUNCTIONS
const express = require('express');
const app = express();             
                                   
app.listen(3000)                   
app.use(express.json());  //global middleware function        
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
const authRouter=express.Router();
app.use('/user',userRouter); 
app.use('/auth',authRouter); 
userRouter.route('/').get(getUser).post(postUser).patch(updateUser).delete(deleteUser) 

userRouter.route('/:id').get(getUserById) 

app.get('/user',(req,res)=>{ //path specific middleware functions
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
authRouter.route('/signUp').get(middleware1,getSignUp,middleware2).post(PostSignUp) //see how we use middleware in get method
function middleware1(req,res,next) {
    console.log("Middleware function encountered");
    next(); //Write next here to play next function
}
function middleware2(req,res) {
    console.log("Middleware2 ended req-res cycle");
    res.sendFile('/public/index.html',{root:__dirname});//by this you can end req-res cycle  
    
//res.json({message:"middleware 2 ended req-res cycle"})//by this you can end req-res cycle
//last wale me next ki jaroorat nahi padti hai
}
function getSignUp(req,res,next){     //isko hum middleware ki tarah use kar rahe isliye next as parameter pass kar rahe else
    //no need
    // res.sendFile('/public/index.html',{root:__dirname}); //This is commented to show that middleware2 will end req-res cycle
    //if you are not learning that then uncomment it
    next();
}
function PostSignUp(req,res){
    let obj=req.body;
    console.log('backend obj',obj);
    res.json({
        message:"user signedUp",
        data:obj
    });
}