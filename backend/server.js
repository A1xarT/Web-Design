const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('public'))
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, './home.html'))
})
app.get('/', function (req, res) {
  res.send('<html><body><h1>Hello World</h1></body></html>')
})
app.get('/get-data', function (req, res) {
  res.send({ message: 'Greetings from NodeJS!' })
})

app.listen(8080)
