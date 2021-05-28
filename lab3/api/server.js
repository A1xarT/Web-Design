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
        let userJson = JSON.parse(user)
        console.log(`update _user set name='${userJson.name}', email='${userJson.email}', gender='${userJson.gender}', 
        birth_date='${userJson.birth_date}', pass='${userJson.pass}' where _user.id='${userJson.id}'`)
        const con = connectDatabase()
        con.query(`update _user set name='${userJson.name}', email='${userJson.email}', gender='${userJson.gender}', 
        birth_date='${userJson.birth_date}', pass='${userJson.pass}' where _user.id='${userJson.id}'`, (err, result) => {
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
        con.end()
    }
})
app.get('/api/get-records', ((req, res) => {
    console.log('/api/get-records called')
    if (user) {
        let userJson = JSON.parse(user)
        const con = connectDatabase()
        con.query(`select * from pb_record where pb_record.user_id=${userJson.id}`, (err, result) => {
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
        con.end()
    }
}))
let record = ''
app.post('/api/user-record', (req, res) => {
    console.log('user-record called')
    let data = ''
    req.on("data", chunk => {
        data += chunk;
    });
    req.on("end", () => {
        console.log(data)
        record = data
    });
});
app.get('/api/update-record', ((req, res) => {
    console.log('/api/update-record called')
    if (record) {
        let recordJson = JSON.parse(record)
        const con = connectDatabase()
        con.query(`update pb_record set name='${recordJson.name}', favorite='${recordJson.favorite}'
         where pb_record.id='${recordJson.id}'`, (err, result) => {
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
        con.end()
    }
}));
app.get('/api/add-record', ((req, res) => {
    console.log('/api/add-record called')
    if (record) {
        let recordJson = JSON.parse(record)
        const con = connectDatabase()
        con.query(`insert into pb_record( name, favorite, user_id) values ('${recordJson.name}', 
        '${false}', '${recordJson.user_id}')`, (err, result) => {
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
        con.end()
    }
}));
app.get('/api/delete-record', ((req, res) => {
    console.log('/api/delete-record called')
    if (record) {
        let recordJson = JSON.parse(record)
        const con = connectDatabase()
        con.query(`delete from phone_list where phone_list.pb_record_id='${recordJson.id}'`, (err, result) => {
            if (err) {
                throw err
            }
        })
        con.query(`delete from pb_record where pb_record.id='${recordJson.id}'`, (err, result) => {
            if (err) {
                throw err
            }
            res.send(result.rows)
        })
        con.end()
    }
}))
app.get('/api/get-record-numbers', ((req, res) => {
    console.log('/api/get-record-numbers called')
    if (record) {
        let recordJson = JSON.parse(record)
        try {
            const con = connectDatabase()
            con.query(`select * from phone_list where phone_list.pb_record_id=${recordJson.id}`, (err, result) => {
                if (err) {
                    throw err
                }
                console.log(result.rows)
                res.send(result.rows)
            })
            con.end()
        } catch (err) {
            console.log(err.message)
        }

    }
}))
app.get('/api/register-user', ((req, res) => {
    console.log('/api/register-user called')
    if (user) {
        let userJson = JSON.parse(user)
        try {
            const con = connectDatabase()
            con.query(`insert into _user ( name, email, gender, birth_date, pass) values(
            '${userJson.name}', '${userJson.email}', '${userJson.gender}', '${userJson.birth_date}',
            '${userJson.pass}')`, (err, result) => {
                if (err) {
                    throw err
                }
                console.log(result.rows)
                res.send(result.rows)
            })
            con.end()
        } catch (err) {
            console.log(err.message)
        }

    }
}))

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
