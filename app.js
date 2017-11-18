const express = require('express');
const bodyParser = require('body-parser');
// Init app
const app = express();

const port = process.env.PORT || 5000;
require('./libs/db-connection');
// conf
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
// route
app.use('/api', require('./routes/'));
// run app
app.listen(port, err => {
  if (err) throw err;
  console.log(`App Running on port ${port}`);
});
