//react-es2015 module loader
//node+express - common js loader

const http = require('http')
const port = 3000
const server = http.createServer(function(request, response){
    if (request.url == "/"){
        response.end("Welcome To My Site")
    }else if(request.url == "/about"){
        response.end("Welcome to About page")
    }else if(request.url == "/users"){
        const users = [{id: 1, name: "shiva"}, {id: 2, name: "chandana"}]
        response.setHeader('Content-Type','application/json')
        response.end(JSON.stringify(users))
    }else if(request.url == "/services"){
        response.setHeader('Content-Type', 'text/html')
        response.end("<h2>Services we offer</h2> <ul><li>Web Development</li><li>App Development</li></ul>")
    }else{
        response.end("Invalid url")
    }
})

server.listen(port, function(){
    console.log("Listening to port", port)
})