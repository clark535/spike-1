var express = require('express');
var router = express.Router();
var request = require('request');



router.get('/', function(req, res){

    var keyword = req.query.q;

    var fullRequestUrl = 'http://api.giphy.com/v1/gifs/search';
    fullRequestUrl += '?api_key=' + process.env.GIPHY_API_KEY;
    fullRequestUrl += '&q=' + keyword;
    fullRequestUrl += '&rating=g';
    
    request(fullRequestUrl, function (error, response, body) {
        if (error) {
            console.log('error making search giphy request', error);
            res.sendStatus(500);
        } else {
            res.send(body);
        } 
      });//npm request
});

module.exports = router;
