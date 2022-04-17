//Methods of-->Get,Post,Patch,Delete
//in

const express = require('express');//This is the basic boiler plate code don't forgot to initialize it
const app = express();             //This is the basic boiler plate code don't forgot to initialize it
                                   
app.listen(3000)                   //This is the basic boiler plate code don't forgot to initialize it
app.use(express.json());           //This you have to write as it will convert the data posted from frontend into json format
let user={};
app.get('/user',(req,res)=>{
    res.send(user);
})
//To do any request(i.e get,post...) in postman you have to do first select body then raw then json,as the above (let user={};) 
//is a json object.
app.post('/user',(req,res)=>{
    user=req.body;//This will change the user data
    console.log(req.body);//in req.body you will get the data the user want to post
    res.json({message:"Data recieved successfully",user:req.body}); //instead of using res.send you can also use res.json to send any json object
});
//To update the data use->Patch
app.patch('/user',(req,res)=>{
    console.log(req.body,"This needs to be updated");
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        user[key]=dataToBeUpdated[key];
    }
    res.json({message:"Data updated successfully",user:req.body});
})
//To Delete Data
app.delete('/user',(req,res)=>{
    user={};
    res.json({message:"Data has been deleted successfully"});
})