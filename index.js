let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bncvznczvzz1411',
    database: 'dbTest',
    charset: 'utf8_general_ci'
});

connection.connect(err => {
    if (err) console.log(err.stack);
    console.log('connect success');
});

let sqlSelect = 'select * from customer';
connection.query(sqlSelect, (err, results, fields) => {
    if (err) throw err;
    console.log(results);
});

let sqlWhere = 'select * from customer where address = "Thái Bình"';
connection.query(sqlWhere, (err, results, fields) => {
    if (err) throw err;
    console.log(results, 'Where');
});

let sqlLimit = 'select * from customer limit 3';
connection.query(sqlLimit, (err, results, fields) => {
    if (err) throw err;
    console.log(results, 'Limit');
});