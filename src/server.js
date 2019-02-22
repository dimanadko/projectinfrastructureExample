'use strict';

const PORT = 8000;

const http = require('http'),

      user = {
        'name': 'Marcus Aurelius',
        'city': 'Rome',
        'proffesion': 'emperor'
      },

      server = http.createServer((req, res) => {

        res.end(
          `${user.name} said "Java is a crap!" and chiao from ${user.city}`
        );

      });

server.on('clientError', (err, socket) => {

  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');

});

server.listen(PORT);
