var express = require('express');
var router = express.Router();

let indexListData = require('../public/data/index-list.json');
let titleList = require('../public/data/titleList.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//列表list 
router.get('/api/indexList', function(req, res, next) {
  res.json({
    code: 0,
    data: indexListData
  })
});
// header title list列表
router.get('/api/titleList', function(req, res, next) {
  res.json({
    code: 0,
    list: titleList
  })
});


module.exports = router;
