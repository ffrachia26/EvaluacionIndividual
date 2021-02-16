const express = require('express')
const app = express()
const path = require('path')
const rutaIndex = require('./ui-notitas/routes/index')
const rutaDetail = require('./ui-notitas/routes/detail')
const Sequelize = require('sequelize');

app.listen(3000, function(){
    console.log('El servidor esta corriendo en el puerto 3000');
    console.log('http://locahost:3000')
});

app.set('view engine', 'ejs');

app.set('views', './ui-notitas/views')

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.use(express.static(path.join('public')));

app.use('/', rutaIndex);

app.use('/detail', rutaDetail);

