const express = require('express')
const app = express()

app.engine('.hbs', require('express-handlebars')({ extname: '.hbs ' }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3000, () => console.log('http://localhost:3000'))