const express = require('express')
const app = express()
const ejs = require('ejs');

app.set('view engine','ejs');

app.get('/', function (req, res) {
    res.render('index')
  })
  
app.use(express.static('images'))

app.listen(3000)