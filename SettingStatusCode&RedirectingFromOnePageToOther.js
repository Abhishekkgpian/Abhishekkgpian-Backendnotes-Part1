//Things discussed:-
// using status code
// redirecting from one page to other
const http=require('http');
const fs=require('fs');
const _=require('lodash'); //initializing lodash library
//let randomNumber=_.random(0,20); -->This will generate a random number using lodash library
//let greet=_.once(()=>{
//    console.log("This will be printed only once");
//});
//greet();
//greet(); Even if you call the function more then once it will run only once.
const server=http.createServer((req,res)=>{
    console.log("request has been made from the browser to the server new");

let path;
switch (req.url) {
    case '/':
        path='./lecture5.html'
        break;
    case '/about':
        path='./about.html'
        break;
    case '/about-me':      //here is how to redirect to someother page.we have about page so we are redirecting 
        res.statusCode=301;//from about-me to aboutpage.
        res.setHeader('Location','/about');
        res.end();
        break;

    default:
        path='./404.html';
        res.statusCode=404;//here is how to use status code
        break;
}
    fs.readFile(path,(err,fileData)=>{
        if (err) {
            console.log(err);
        } else {

     res.end(fileData);
        }
    })
    
   
});

server.listen(3000,'localhost',()=>{
    console.log("server is listening on port no:3000");
   
});
