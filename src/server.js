const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';
const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
routes.set(server);

server.listen(port, () => {
    console.log(`Server running on port ${port} in the ${environment.toUpperCase()} environment.`);
});

