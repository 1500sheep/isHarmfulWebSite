var express = require('express');
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");
var async = require('async');
var url_input = "https://twitter.com/moonriver365";
const webdriver = require('selenium-webdriver');
until = webdriver.until;
const chrome = require('selenium-webdriver/chrome');
options = new chrome.Options();
options.addArguments('headless'); // note: without dashes
options.addArguments('disable-gpu');
const driver = new webdriver.Builder().forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)                         // note this
    .build();

router.get('/', function (req, res) {
    res.render('index', {title: 'Harmful Website Discrimination System', topicHead: 'URL Form',});
    console.log('user accessing Home Page');
});
router.post('/', function (req, res) {
    url_input = req.body.title;
    console.log(url_input);

    driver.get(url_input);
    const By = webdriver.By;
    var curScroll = driver.executeScript("return document.body.scrollHeight");
    var tweet = "";

    var el = driver.findElements(By.css('.tweet .js-tweet-text-container')); //엘리먼트를 얻고
    el.then(function (elements) {
        for (var i = 0; i < elements.length; i++) {
            elements[i].getText().then(function (text) {
                console.log(text);
            }).then(function (data) {
                // console.log(data);
                // if(data == elements.length)
                    // driver.close();
            })
        }
    }).catch(function (err) {
        console.error(err); // Error 출력
    });
    res.render('index', {userValue: tweet, title: 'Harmful Website Discrimination System', topicHead: 'URL Form'});
});

function waitToScrollDown(curScroll) {
    console.log("scroll waiting...  " + curScroll);
    driver.wait(function () {
        console.log("scroll waiting...");
        var script = "return document.body.scrollHeight";
        driver.executeScript(script).then(function (data) {
            console.log(data);
            console.log(curScroll);

            return data != curScroll
        });
        // console.log(changedScroll);
    }, 3000).then(function () {
        console.log("sefasfasdf3######################")
    });
}
module.exports = router;