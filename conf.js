const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '3000', 
    user: 'me', 
    password: 'secret',
    database: 'my_db',
});
module.exports = connection;