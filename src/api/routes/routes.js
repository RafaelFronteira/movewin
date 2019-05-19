const allowCors = require('../../config/cors');
const authController = require('../routes/auth');
const uberController = require('../routes/uberRoutes');


function set(server) {
    server.use(allowCors);
    server.use('/api/auth', authController);
    server.use('/api/uber', uberController);
}


module.exports = { set };