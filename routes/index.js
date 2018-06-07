var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");

/* GET home page. */
router.get('/', function(req, res, next) {
    var inputUrl = "https://twitter.com/moonriver365";
    options = {
        url: inputUrl,
        port: 80,
        method: 'GET'
    };
    request.get(options, function (error, response, body) {
        if (error) throw error;
        url = 'http://gall.dcinside.com';
        $ = cheerio.load(body);

        $('.tweet .js-tweet-text-container').each(function () {
            var tweet = $(this).text();
            console.log(tweet)
        });
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;