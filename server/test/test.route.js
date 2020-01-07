const express = require('express');

const router = express.Router(); // eslint-disable-line new-cap


router.route('/').get((_, res) => {
    const s = 1;
    res.sendResponse({ s });
});

module.exports = router;
