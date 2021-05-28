const express = require('express');
const pg = require('pg')
const bodyParser = require('body-parser')
const app = express(),
    port = 3080;

app.use(bodyParser.json());

// initial data
const con = connectDatabase()
con.query('select * from _user')

app.get('/api/all-users', (req, res) => {
    console.log('all-users called')
    const con = connectDatabase()
    con.query('select * from _user', (err, result) => {
        if (err) {
            throw err
        }
        res.send(result.rows)
    })
    con.end()
})
let mail = ''
app.post('/api/user', (req, res) => {
    console.log('user called')
    let data = ''
    req.on("data", chunk => {
        data += chunk;
    });
    req.on("end", () => {
        console.log(data)
        mail = data
    });
});
app.get('/api/get-user', (req, res) => {
    console.log('get-user called')
    if (mail) {
        const con = connectDatabase()
        con.query(`select * from _user where _user.email = '${mail}'`, (err, result) => {
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
        con.end()
    }
})
let user = ''
app.post('/api/full-user', (req, res) => {
    console.log('full-user called')
    let data = ''
    req.on("data", chunk => {
        data += chunk;
    });
    req.on("end", () => {
        console.log(data)
        user = data
    });
});
app.get('/api/update-user', (req, res) => {
    console.log('update-user called')
    if (user) {
        user = JSON.parse(user)
        console.log(`update _user set name='${user.name}', email='${user.email}', gender='${user.gender}', 
        birth_date='${user.birth_date}', pass='${user.pass}' where _user.id='${user.id}'`)
        const con = connectDatabase()
        con.query(`update _user set name='${user.name}', email='${user.email}', gender='${user.gender}', 
        birth_date='${user.birth_date}', pass='${user.pass}' where _user.id='${user.id}'`, (err, result) => {
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
        con.end()
    }
})
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
