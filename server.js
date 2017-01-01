var express = require('express');

var app = express();

app.use(express.static('public'));

// For development, uncomment this line
app.listen(8000);

// app.listen(process.env.PORT || '4000');