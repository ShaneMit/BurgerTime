const express = require('express')
const app = express()
const { join } = require('path')

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs ' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./controllers/burgers_controller'))

app.listen(3000, () => console.log('http://localhost:3000'))