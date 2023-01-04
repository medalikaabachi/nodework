/*Write a program to print "HELLO WORLD" to the console:

setTimeout(()=>{console.log('HELLO WORLD')}, 0); */



/*Create a server & Write a program that runs on port 3000 :

const http = require("http")
const server = http.createServer(function(req,res){
    res.write("<h1>Hello Node!!!!</h1>")
})

server.listen(3000,(err)=>{
    err?console.log(err):console.log("server is runnig on port 3000")
}) */



/*Program that reads and console.log data from welcom.tx :

var fs = require('fs');

fs.readFile('welcome.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
 }); */



 //create a function that generates random passwords & console.log() that pwd :

 var generator = require('generate-password');

var passwords = generator.generate({
	length: 10,
	numbers: true
});
console.log(passwords);
 