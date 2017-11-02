var express = require('express');
var apis = express.Router();

apis.get('/'), function(req, res){
  res.send({name: 'List of aval APIs'})
}
/* GET home page. */
apis.get('/vid-pics', function(req, res) {
    res.send({name: 'hey serve client'});
});
/**/
module.exports = apis;
