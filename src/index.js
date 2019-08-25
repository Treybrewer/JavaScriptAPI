const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");
const api = express();


//middle ware to parse requests
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.use(express.static(__dirname + '/public'));




const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wolfpack21',
    database: 'todo' //dont have this yet
});

   try {
    connection.connect();
    console.log("connected to database");
   } catch (e) {
    console.log('Oops. Connection to MySQL failed.');
    console.log(e);
};  



api.post('/add', (req, res) => {
    console.log(req.body);
    
    connection.query('INSERT INTO tasks (description) VALUES (?)', [req.body.item], (error, results) => {
     if (error) return res.json({ error: error });
   connection.query('SELECT LAST_INSERT_ID() FROM tasks', (error, results) => {
      if (error) return res.json({ error: error });
   console.log(results);
     });
    });
    res.send("It works!");
});



api.listen(3000, () => {
    console.log('API up and running!');
});


// api.get('/', (req, res) => {
//     console.log(req);
//     res.send('Hello, world!');
// });