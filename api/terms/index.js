'use strict';
const express = require('express');
const controller = require('./terms.controller');
const router = express.Router();

router.post('/', controller.terms);
router.post('/privacy', controller.privacy);
router.get('/get_terms', controller.get_terms);
router.get('/get_privacy', controller.get_privacy);



module.exports = router;