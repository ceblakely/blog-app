const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('articles/new');
});
router.post('/', (req, res) => {

});

module.exports = router; // when another file imports this file, it gains access to the router from here
