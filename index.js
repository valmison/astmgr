const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.static("view"));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/ami', function(req, res){
    let dt = new Date();
    res.send(dt);
});

app.get('/ami2', function(req, res){
    const AsteriskManager = require('asterisk-manager');
    const ami = new AsteriskManager('5038','192.168.0.250','admin','123456',true);
    ami.on('extensionstatus', function(data){ 
        res.send(JSON.stringify(data));
    });
});

app.listen(80, function(error){
    if(error){
        console.log('Could not start the server')
    }else{
        console.log('Local server running on port 80');
    }
})