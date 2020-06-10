const express = require('express')
const app = express()
const { join } = require('path')

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs ' }))
app.set('view engine', '.hbs')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./controllers/burgers_controller'))
app.use(require('./controllers'))

app.listen(3000, () => console.log('http://localhost:3000'))