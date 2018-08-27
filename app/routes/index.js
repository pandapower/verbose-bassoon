const express = require('express');
const api = require('../api/sample_data');

const router = express.Router();

router.get('/', (req, res) => {
  const data = api.get();
  res.render('pages/list', data);
});

module.exports = router;
