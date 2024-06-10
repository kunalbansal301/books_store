const express = require('express');
const router = express.Router(); // tio modulalize route handling
const {signup} = require('../controller/user2');
const {login} = require('../controller/user2');

router.post('/signup', signup);
router.post('/login', login);
module.exports = router;