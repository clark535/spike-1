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

// https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
// &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
// &markers=color:red%7Clabel:C%7C40.718217,-73.998284
// &key=AIzaSyBXCCVmaJXKRVD4t_t3cCr-pDpV1gy16Gs