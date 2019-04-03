'use strict';
var express = require('express');
var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function (req, res, next) {
    console.log('Hej, jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/store', function(req, res) {
    res.send('To jest sklep!');
});

app.get('/first-template', function (req, res) {
    res.render('first-template');
});

app.get('/auth/google', function (req, res) {
    res.render('auth-google');
})

app.get('/auth/google/logged', function (req, res) {
    res.render('logged-in');
})

var server = app.listen(3000, function () {
    console.log('działa!')
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});