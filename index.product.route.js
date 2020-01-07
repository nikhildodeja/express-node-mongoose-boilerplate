const express = require('express');
const glob = require('glob');
const path = require('path');

const router = express.Router(); // eslint-disable-line new-cap

glob.sync('./server/product/**/*.route.js').forEach((file) => {
    require(path.resolve(file))(router); // eslint-disable-line
});

module.exports = router;
