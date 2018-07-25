var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vishwanathamramu@gmail.com',
        pass: 9866152401
    }
});


/**dB Connection */
var dBconnection = require('./_db/db_connection');

//controllers
var auth = require('./routes/auth');
var region = require('./routes/region');

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


// Add headers
app.use((req, res, next) => {
    // Website you wish to allow to connect
    var allowedOrigins = ['http://localhost:4200', 'http://localhost:8100'];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    // Pass to next layer of middleware
    req.headers['if-none-match'] = 'no-match-for-this';
    next();
});






app.get('*'), (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
}


var port = process.env.PORT || '3000';
app.set('port', port);


app.post('/user-registration', auth.userRegister);
app.post('/user-login', auth.userLogin);
app.post('/user-status', auth.userStatus);
app.post('/userVerified', auth.userVerified)

app.get('/getAllUsers', auth.getAllUsers);
app.put('/updateUser/:id', auth.updateUser);


app.post('/addState', region.addStates)
app.get('/getAllStates', region.getAllStates)

app.post('/addDist', region.addDist)
app.get('/getAllDists', region.getAllDists)

app.post('/addTown', region.addTown)
app.get('/getAllTowns', region.getAllTowns)




var server = http.createServer(app);
server.listen(port, () => console.log("server is running"))









