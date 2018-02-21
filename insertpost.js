/*const express        =         require("express");
const bodyParser     =         require("body-parser");
const app            =         express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.sendfile("./views/login.html");
});
app.post('/reg',function(req,res){
    const user_name=req.body.user;
    const password=req.body.password;
    const date=req.body.date;
    console.log("Username = "+user_name+", password is "+password,"date "+date);
    res.end("yes");
});
app.listen(3000,function(){
    console.log("Started on PORT 3000");
};*/
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'expresssql',
    port	   : '3306'
});
connection.connect(function (err) {
    if(err)
    {
        console.log("Connection unsuccessfully!!!!!");
    }
    else
    {
        console.log("connected Successfully!!!");
    }
});

app.get('/registration',function(req,res,next){
    res.sendfile('/registration.html');
});
app.post('/myaction', function(req, res) {
    console.log('req.body');
    console.log(req.body);
    res.write('You sent the firstname "' + req.body.firstname+'".\n');
    res.write('You sent the lastname "' + req.body.lastname+'".\n');
    res.write('You sent the age "' + req.body.age+'".\n');
    res.write('You sent the username "' + req.body.username+'".\n');
    res.write('You sent the email "' + req.body.email+'".\n');
    res.write('You sent the password "' + req.body.password+'".\n');
    res.write('You sent the contactno "' + req.body.contactno+'".\n');

    res.end()


    mysql.query("Insert into "+loginpage+" (firstname,lastname,age,username,email,password,contactno) VALUES ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.age+"','"+req.body.username+"','"+req.body.email+"','"+req.body.password+"','"+req.body.contactno+"')",function(err, result)
    {
        if (err)
            throw err;
    });
});
app.listen(3000);
console.log('Example app listening at port:3000');