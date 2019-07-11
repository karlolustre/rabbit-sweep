const express = require('express');
const router = express.Router();
const UserModel = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', (req, res) => {
    console.log(req.body)
})


module.exports = router;