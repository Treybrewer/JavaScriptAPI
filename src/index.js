const express = require('express');

const bodyParser = require("body-parser");
const api = express();


//middle ware to parse requests
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.use(express.static(__dirname + '/public'));

api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('It works!');
   });


api.listen(3000, () => {
    console.log('API up and running!');
});


// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
// });