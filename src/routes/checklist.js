const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('Ola');
    res.send("Ola mundo");
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
})

module.exports = router