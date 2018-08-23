var http = require("http");

var PORT = 7000;
var PORT2 = 7500;

var server = http.createServer(function(request, response) {
    console.log("this is the good server");
    response.end("You look amaze! You hit: " + request.url);

});

var server2 = http.createServer(function(request, response) {
    console.log("this is the bad server");
    response.end("Your shirt is uglay! You hit: " + response.url);

});

server.listen(PORT, function() {
    console.log("server started listening on http://localhost:" + PORT);

});

server2.listen(PORT2, function() {
    console.log("server started listening on http://localhost:" + PORT2);

});
