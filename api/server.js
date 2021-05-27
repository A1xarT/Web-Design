const express = require('express');
const pg = require('pg')
const app = express(),
    port = 3080;

// initial data
const con = connectDatabase()
con.query('select * from _user')

const users = [];


app.get('/api/all-users', (req, res) => {
    console.log('api/all-users called .')
    const con = connectDatabase()
    con.query('select * from _user', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
    con.end()
})

app.get('/api/users', (req, res) => {
    console.log('api/users called!!!!!!!')
    res.json(users);
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

function connectDatabase() {
    const dbConfig = require('./db.config.js')
    return new pg.Pool({
        user: dbConfig.USER,
        host: dbConfig.HOST,
        database: dbConfig.DB,
        password: dbConfig.PASSWORD,
        port: dbConfig.PORT
    })
}
