const express = require('express');
const router = express.Router();

router.use('/animeshows',require('./animeseries'));

module.exports = router;