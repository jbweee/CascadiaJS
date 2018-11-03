const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const router = require('./router.js');
const morgan = require('morgan');
const PORT = 9001;

var app = express();
app.use(morgan('dev'));

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

// app.use('/api', router);

app.use(express.static(path.resolve(__dirname, '../static')));

app.listen(PORT, () => {
  console.log('Twitch Game Search is listening on PORT', PORT);
})