var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request("https://news.ycombinator.com/", function (error, response, body) {
    if (error) {
        console.log("Error: " + error);
    }
    console.log("Status code: " + response.statusCode);

    var $ = cheerio.load(body);

    // $('table.itemlist > tr.athing').each(function (index) {
    //     var title = $(this).find('td.title > a').text().trim();
    //     var ele = $(this).find('td.title');
    //     console.log("Title: " + title);
    //     console.log("Ele: " + ele);
    // });

});