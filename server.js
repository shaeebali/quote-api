const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const { all } = require('express/lib/application');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

//Get random quote via the /api/quotes/random route
app.get('/api/quotes/random', (req, res, next) => {
  const quote = getRandomElement(quotes);
  res.send( {quote: quote} );
});

//Get all quotes via /api/quotes route
app.get('/api/quotes', (req, res, next) => {
  if(!req.query.hasOwnProperty('person')) {
    res.send({quotes: quotes});
  } else {
    const filterQuote = quotes.filter( (element) => {
      element.person === req.query.person
    });
    res.send({quote: filterQuote});
  }
});

//Listening on desired port and log to console for monitoring
app.listen(PORT, () => {
console.log(`Server is listening on ${PORT}`)
});
