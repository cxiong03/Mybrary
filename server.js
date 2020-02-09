const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')

app.set('view engine', 'ejs') // set view engine using ejs
app.set('views', __dirname + '/views') // set where our views will be coming from & put them in views directory
app.set('layout', 'layouts/layout') // set layout file so we don't have to duplicate the beginning html and ending store in layouts folder
app.use(expressLayouts)// tell express app to use layout
app.use(express.static('public')) // tell where are public file are

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)