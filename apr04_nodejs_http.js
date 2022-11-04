const http = require('node:http');

const handleServer = (req, res)=>{
    res.writeHead(200,{'Conted-type':'text/html'})
    res.write('<h1>Hola mundo4</h1>');
    res.end();
}

// Creando un servidor
const server = http.createServer(handleServer);

server.listen(8000, ()=>{
    console.table('Server on port 8000');
});