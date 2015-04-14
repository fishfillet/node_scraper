var cheerio = require('cheerio');
var request = require('request');
var fs = require('fs');


request('http://substack.net/images/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    // console.log(body) 
    parseBody(body);
  }
})

function parseBody(data){
  var typeCheck = /(\.|\/)(gif|jpe?g|png|txt|svg)$/i
  // console.log('data loaded');

  $ = cheerio.load(data);
  // console.log($('tr').contents().length);

  $('tr').each(function(index, element){
    var permission = $(this).children().first().text();
    var absoluteUrl = $(this).find('a').attr('href');
    var images = $(this).children().last().text();
    var check = typeCheck.exec(images);


    if (check){
      var fileType = check[0];
      console.log(fileType);
    }




  });

}

