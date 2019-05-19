const express = require('express');
const router = express.Router();
const uberController = require('../controllers/uberController');


router.get('/', uberController.uberAuth);

module.exports = router;