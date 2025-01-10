const express = require('express');
const app = express();
const port = 3000
const config ={
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql2');
const connection = mysql.createConnection(config);

const deleteAll = `DELETE FROM people`;
connection.query(deleteAll);
const insertName = `INSERT INTO people(name) values ('Henrique'), ('Wesley'), ('Samay')`;
connection.query(insertName);
const selectName = `SELECT name FROM people`;
const resultNames = new Promise((resolve, reject) => {
    connection.query(selectName, function(error, results, fields) {
    resolve(results);
})});
connection.end();

resultNames.then((listNames) => {
    let pNames = '';
    listNames.forEach((names) => {
        console.log(names)
        pNames += `<p>${names.name}</p>\n`
    })
    console.log(pNames)
    app.get('/', (req,res) => {
        res.send(`
            <h1>Full Cycle Rocks!</h1><br>
            <h2>Lista de nomes</h2>
            ${pNames}
            `);
    });
})


app.listen(port, () => {
    console.log('rodando na porta', port);
})