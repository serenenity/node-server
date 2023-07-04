
//  EXPRESS FRAMEWORK

//install
const express = require('express');
const bodyParser = require('body-parser')

const path = require('path');
const app = express();

// anytime the use() method is called this means we are using a middleware
app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {

    //res.send('hello world, this is an express application.');
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
    res.sendFile(path.join(__dirname, 'static', 'style.css'));
});

//POST
app.post('/', (req, res) => {
    console.log(req.body);

    // SOME DATABASE WORK COMES IN HERE

    res.send('success!')
})

app.get('/example-route', (req, res) => {
    res.send('This route is a simple example of how to create router in express js');
});

//ROUTER PARAMETER
// So the server is requesting for the name and the age from the client while he responds with a message Example of route Params
app.get('/route-param/:name/:age', (req, res) =>{
    console.log(req.params);
    // res.send('Example of route Params');
    console.log(req.query);

    res.send('Hello, ' + req.params.name + ' welcome to express router parameters' );
});




app.listen(3000);






















//   WE HAVE A RAW NODE APPLICATION BELOW, BUT WE WILL HAVE A NODE FRAMEWORK APPLICATION ABOVE CALLED EXPRESS
// const http = require('http');

// http.createServer((req, res) =>{

//     res.write('hello world!');
//     res.end();
// }).listen(3000);