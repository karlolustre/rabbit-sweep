const express = require('express');
const router = express.Router();

const TaskModel = require('../models/Task');

//Create Task
router.post('/create', (req, res) => {
    TaskModel.create(req.body)
    .then(task => {
        console.log('Task created successfully')
        res.send(task)
    })
    .catch(err =>{
        res.status(400).json('Error: ' + err)
    })
})











module.exports = router;