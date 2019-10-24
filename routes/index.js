var express = require('express');
var router = express.Router();

let indexListData = require('../public/data/index-list.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/indexList', function(req, res, next) {
  res.json({
    code: 0,
    data: indexListData
  })
});


module.exports = router;
