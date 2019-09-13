const connection = require('./conf');
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('./api/movies', (req, res) => {
  connection.query('SELECT * from movies', (err, results) => {
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

app.post('/api/movies', (req, res) => {

  // Get the data sent
  const formData = req.body;

  // connection to the database, and insertion of the movies
  connection.query('INSERT INTO movies SET ?', formData, (err, results) => {

    if (err) {
      // If an error has occurred, then the user is informed of the error
      console.log(err);
      res.status(500).send("Error saving an movie");
    } else {
      // If everything went well, we send a status "ok".
      res.sendStatus(200);
    }
  });
});

// the id is put as a parameter of the route
app.put('api/movies/:id', (req, res) => { 
  const idMovies = req.params.id;
  // data stored in req.body
  const formData = req.body;

  // connection to the database, and insertion of the movies
  connection.query('UPDATE movies SET ? WHERE id = ?', [formData, idMovies], err => {
    if (err) {
      // If an error has occurred, then the user is informed of the error
       console.log(err);
      res.status(500).send("Error editing an movie");
    } else {
      // If everything went well, we send a status "ok".
      res.sendStatus(200);
    }
  });
})