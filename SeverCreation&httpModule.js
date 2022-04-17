// server creation
// 1.http module
const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log("request has been made from the browser to the server new");
// console.log(req);
// console.log(req.method);
// console.log(req.url);
// res.setHeader('Content-Type','text/plain');
// res.write('Hello People');
// res.setHeader('Content-Type','text/html');
// res.write('<h1>Hello People</h1>');
// res.end();
//     fs.readFile("./lecture3.html",(err,fileData)=>{
//         if (err) {
//             console.log(err);
//         } else {
// // res.write(fileData);
// // use res.write when you have multiple files to serve in case you have only one file then that can also be put into res.end
//      res.end(fileData);
//         }
//     })
let path;
switch (req.url) {
    case '/':
        path='./lecture3.html'
        break;
    case '/about':
        path='./about.html'
        break;

    default:
        path='./404.html'
        break;
}
    fs.readFile(path,(err,fileData)=>{
        if (err) {
            console.log(err);
        } else {
// res.write(fileData);
// use res.write when you have multiple files to serve in case you have only one file then that can also be put into res.end
     res.end(fileData);
        }
    })
    
    
});
// port number,host,callback function
server.listen(5000,'localhost',()=>{
    console.log("server is listening on port no:5000");
   
});
