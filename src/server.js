const express = require('express');
// const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');
const port = process.env.port || 3000;
const environment = process.env.NODE_ENV || 'development';
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// server.use(express.static(path.join(__dirname, './view')));
routes.set(server);

// console.log('Uber => ', );

server.listen(port, () => {
    console.log(`Server running on port ${port} in the ${environment.toUpperCase()} environment.`);
});

