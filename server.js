const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const { all } = require('express/lib/application');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//Get random quote via the /api/quotes/random route
app.get('/api/quotes/random', (req, res, next) => {

});

//Get all quotes via /api/quotes route
app.get('/api/quotes', (req, res, next) => {
  const allQuotes = req.query;
  res.send(allQuotes);
  // console.log(quotes);
});

//Listening on desired port and log to console for monitoring
app.listen(PORT, () => {
console.log(`Server is listening on ${PORT}`)
});
