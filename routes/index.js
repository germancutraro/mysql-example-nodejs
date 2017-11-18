const express = require('express');
const db = require('../libs/db-connection');
const router = express.Router();

router.get('/', (req, res) => {
  let sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.render('index', {result});
    //console.log(result);
  });
});

router.post('/create', (req, res) => {
  let user = {name: db.escape(req.body.name), surname: db.escape(req.body.surname)};
  let sql = 'INSERT INTO users SET ?'
  let query = db.query(sql, user, (err, result) => {
    if (err) throw err;
    res.redirect('/api');
  });
});

module.exports = router;
