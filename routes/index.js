var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var url_input="https://twitter.com/moonriver365";
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
/* GET home page. */
router.get('/', function(req, res, next) {
    //var inputUrl = "https://twitter.com/moonriver365";
    // var inputUrl =url_input;
    // options = {
    //     url: inputUrl,
    //     port: 80,
    //     method: 'GET'
    // };
    // request.get(options, function (error, response, body) {
    //     if (error) throw error;
    //     url = 'http://gall.dcinside.com';
    //     $ = cheerio.load(body);
    //
    //     $('.tweet .js-tweet-text-container').each(function () {
    //         var tweet = $(this).text();
    //         console.log(tweet)
    //     });
    // });
    res.render('index', { title: 'Harmful Website Discrimination System' });
});
router.get('/',function(req,res){
    res.render('index',{title: 'Harmful Website Discrimination System',topicHead:'URL Form',});
    console.log('user accessing Home Page');
});
router.post('/',function(req,res){
            url_input=req.body.title;
            console.log(url_input);
            options = {
                url: url_input,
                port: 80,
                method: 'GET'
            };
            var tweet="";
            request.get(options, function (error, response, body) {
                if (error) throw error;
                url = 'http://gall.dcinside.com';
                $ = cheerio.load(body);

                $('.tweet .js-tweet-text-container').each(function () {
                    tweet = $(this).text();
                    console.log(tweet)
                });
            });
            res.render('index', { userValue:tweet,title: 'Harmful Website Discrimination System',topicHead:'URL Form' });
        })
    // }
module.exports = router;