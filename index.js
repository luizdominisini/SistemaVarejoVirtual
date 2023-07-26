const express = require('express');
const app = express();
const hand = require('express-handlebars');
const routes = require('./routes/routes');
const Services = require('./services/services');

app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.listen(3000);