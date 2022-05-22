const express = require('express')
const app = express()
const ejs = require('ejs')

app.set ('view engine', 'ejs')
app.use( express.static( "images" ) );

app.get('/', function (req, res) {
  res.status(200).render('index')
})

app.listen(3000)