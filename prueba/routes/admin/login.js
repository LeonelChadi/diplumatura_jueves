var express = require('express');
var session = require('express-session');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('admin/login',{
  layout: 'admin/layout'
  
})

});

module.exports = router;