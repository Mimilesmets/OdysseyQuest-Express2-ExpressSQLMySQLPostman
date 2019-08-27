const express = require ('express');
const app = express();
const port = 3000;
const connection = require ('./conf');

app.get('/api/movie', (req, res) => {
connection.query('SELECT * from movie', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving movies');
    } else {
      res.json(results);
    }
    
  });
 
 });
 
 
 app.get('/api/movie/name', (req, res) => {
  let sql = 'SELECT name  from movie';
  
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving movies');
    } else {
      res.json(results);
    }
    
  });
 });
