const express = require('express')
const app = express()
const port = 3000
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)


app.get('/', (req, res) => {
  var sql = `INSERT INTO people(name) values('Alfredo')`
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.send(err);
    }

    connection.query('SELECT name FROM people', (err, rows, fields) => {
      if (err) {
        console.error(err);
        return res.send(err);
      }

      res.send("<h1>Full Cycle Rocks!</h1><br><h2>Registros:</h2><br>" + rows.map(row => {return "- " + row.name}).join("<br>"));});
  });
})


app.listen(port, () => {
    console.log(`Rodando no http://localhost:${port}`)
})