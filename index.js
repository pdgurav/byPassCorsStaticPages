var cheerio = require('cheerio');
const http = require('http');
var request = require('request');
var fs = require('fs');

var urlTofetch = "https://www.w3schools.com/"

// Create an HTTP server
const server = http.createServer((req, res) => {


  var url = req.url;
  console.log(url)
  if (url === '/iframe') {
    request(urlTofetch, (urlTofetch, resInner, html) => {
      
      res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': html.length });
      // console.log(123)
      res.write(html);
      console.log(123)
      res.end();

    });
  } else {
    console.log(1234)
    fs.readFile('demo.html', function (err, data) {
      res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
      res.write(data);
      res.end();
    });
  }

}).listen(3000);
