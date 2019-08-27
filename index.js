const express = require ('express');
const app = express();

app.get ('/api/movies', function (req, res) {
    res.send('movies')
})
app.get ('/api/movies/names', function (req, res){
    res.send('movies names')
})