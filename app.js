//Using express 
const express = require('express');
const app = express();

app.listen(3000)

app.get('/about',  (req, res)=> {
    //    res.send('<h1>Hello World</h1>');
    res.sendFile('./about.html',{root:__dirname}); //you have to write root:__dirname as res.sendFile wants complete path 
    //location,so you have to initialize that you are giving the path relative to what.Or you can simply give then complete 
    //path location(not suggested).
})


app.get('/',  (req, res)=> {
    //res.send('<Hello World');
    //console.log("Express started");
    // res.send('<h1>Hello World</h1>');
    res.sendFile('./lecture5.html',{root:__dirname});
})
//how to redirect in express
app.get('/about-us',  (req, res)=> {
    res.redirect('/about');
})
//Serving 404 page in exress
//app.use will be run when none of above(i.e app.get('/',(req,res)=>{...})...)will be run i.e
// it is same as default case in switch case statement,so always place app.use in the bottom
app.use((req,res)=>{ 
    res.status(404).sendFile('./404.html',{root:__dirname});//By this way you can set status code along with sending file
//there is another way of setting status code as well which you have seen in previous notes
})