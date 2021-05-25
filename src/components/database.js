import { Client } from 'pg'
function connectDB () {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'PhoneBook',
    password: '80601653',
    port: 5432
  })
  client.connect()
  return client
}

function addUser (user) {
  const client = connectDB()
  // eslint-disable-next-line handle-callback-err
  client.query('select * from _user', (err, res) => {
    client.end()
  })
}

function getUserByMail (mail) {
  const client = connectDB()
  // eslint-disable-next-line handle-callback-err
  client.query('select * from _user where _user.mail == ' + mail, (err, res) => {
    if (!res) {
      return false
    }
    const user = res.rows
    client.end()
    return user
  })
}

function getUsersList () {
  const client = connectDB()
  // eslint-disable-next-line handle-callback-err
  client.query('select * from _user', (err, res) => {
    const users = res.rows
    client.end()
    return users
  })
  return []
}

module.exports = {
  connectDB,
  addUser,
  getUserByMail,
  getUsersList
}
