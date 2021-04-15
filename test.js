const server = require('./index');

server(3000);

setTimeout(() => {
  process.exit(0);
}, 5000);
