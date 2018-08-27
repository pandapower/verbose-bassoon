const express = require('express');
const exphbs = require('express-handlebars');
const indexRoutes = require('./app/routes/index');

const app = express();

// Express Handlebars Setup
app.engine('.hbs', exphbs({
  defaultLayout: 'index',
  extname: '.hbs',
  partials: 'views/partials',
}));
app.set('view engine', '.hbs');

// Routing
app.use('/', indexRoutes);

// Send 404 to invalid routes
app.use((req, res) => {
  res.sendStatus(404);
});

// Start the server
const server = app.listen(process.env.PORT || 3000);
const address = server.address();

console.log(`App listening at http://${address.address}:${address.port}`); // eslint-disable-line no-console

module.exports = app;
