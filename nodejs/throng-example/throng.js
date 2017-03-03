var throng = require('throng')

function startServer(){
    var http = require('http');

    const PORT=3005; 

    function handleRequest(request, response){
        response.end('It Works!! );
    }

    var server = http.createServer(handleRequest);
    server.listen(PORT, function(){
        console.log("Server listening on: http://localhost:%s", PORT);
    });
}

function callers(id){
    var request = require('request');

    setInterval(()=>{
       request('http://localhost:3005', function(err, response){
           responses.push(response);
        console.log(responses.length);
       })
    }, 10);
}

var responses = [];

throng(1, startServer);
throng(5, callers);