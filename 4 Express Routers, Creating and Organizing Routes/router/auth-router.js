const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
    res
        .status(200)
        .send("<h2>Welcome to world best mern series</h2>")
})

router.route('/register').get((req, res) => {
    res.status(200).send("<h2>Welcome to world best mern series</h2>")
})

module.exports = router;




