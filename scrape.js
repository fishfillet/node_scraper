var cheerio = require('cheerio');
var request = require('request');


request('http://substack.net/images/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
    parseBody(body);
  }
})

function parseBody(data){
  console.log('data loaded');
  $ = cheerio.load(data);
  console.log($('tr').contents().length);
  $('tr').each(function(index, element){
    console.log($(this).children().first().text());
    console.log($(this).find('a').attr('href'));
    console.log($(this).children().last().text());
  });

}