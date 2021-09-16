const http = require('http');

const server = http.createServer((peticion, respuesta) => { respuesta.end(); }); server.listen(8000);