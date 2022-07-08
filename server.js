const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    fs.readFile('index.html','utf-8', (err, str)=>{
        if(err){
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end('404 not found');
        }
        res.writeHead(200, {'Content-teype': 'text/html'});
        res.write(str);
        return res.end();
    })
})

server.listen('8080', function(){
    console.log(`Server running in http://localhost:8080`)
})