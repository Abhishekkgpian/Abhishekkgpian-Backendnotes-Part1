//Parameter and queries 
const express = require('express');
const app = express();             
                                   
app.listen(3000)                   
app.use(express.json());          
let user={};
app.get('/user',(req,res)=>{
    res.send(user);
})

app.post('/user',(req,res)=>{
    user=req.body;
    console.log(req.body);
    res.json({message:"Data recieved successfully",user:req.body});
});
//creating an array of objects
let users=[
    {
        'id':1,
        'Name':"Abhishek Thakur"
    },
    {
        'id':2,
        'Name':"Abhishek Kumar"
    }
]
app.patch('/user',(req,res)=>{
    console.log(req.body,"This needs to be updated");
    let dataToBeUpdated=req.body;
    for(key in dataToBeUpdated){
        user[key]=dataToBeUpdated[key];
    }
    res.json({message:"Data updated successfully",user:req.body});
})
app.delete('/user',(req,res)=>{
    user={};
    res.json({message:"Data has been deleted successfully"});
})
//THIS IS HOW TO USE PARAMETERS
// app.get('/users/:id',(req,res)=>{
//     console.log(req.params.id);
//     res.send("user id received");
// })
app.get('/users/:Name',(req,res)=>{
    console.log(req.params.Name);
    res.send("user Name received");
})
//THIS IS HOW TO USE QUERIES
app.get('/users',(req,res)=>{
    res.send(users);
    console.log(req.query);
})

