const user = {
  'name': 'Marcus Aurelius',
  'city': 'Rome',
  'profffesion': 'emperor'
};

const server = http.createServer((req, res) => {

        res.end(
          `${user.name} said "Java is a crap!" and chiao from ${user.city}`
        );

      });

module.exports = server;