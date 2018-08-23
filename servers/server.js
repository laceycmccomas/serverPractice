var http = require("http");

var PORTONE = 7000;
var PORTTWO = 7500;

var serverOne = http.createServer(function(request, response) {
    console.log("this is the good server");
    response.end("You look amaze! You hit: " + request.url);

});

var serverTwo = http.createServer(function(request, response) {
    console.log("this is the bad server");
    response.end("Your shirt is uglay! You hit: " + response.url);

});

serverOne.listen(PORTONE, function() {
    console.log("server started listening on http://localhost:" + PORTONE);

});

serverTwo.listen(PORTTWO, function() {
    console.log("server started listening on http://localhost:" + PORTTWO);

});
