var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var url_input="https://twitter.com/moonriver365";
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const driver = new webdriver.Builder().forBrowser('chrome').build();

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
    //req.check('url','url is required').notEmpty();
    //var errors=req.validationErrors();
    // if(errors){
    //     errors.msg="Input required!";
    //     res.render('index',{title: 'Harmful Website Discrimination System',topicHead:'URL Form',errors:errors});
    //     console.log('Error');
    // }
    // else {
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
    // }
})
module.exports = router;