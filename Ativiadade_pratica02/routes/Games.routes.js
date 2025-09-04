const express = require('express');
const Games = require('../models/Games');

const router = express.Router();

//POST
router.post('/', async(req,res,next) => {
    try {
        const games = await Games.create(req.body);
        return res.status(201).json(games);
    } catch (error) {
        next(error);
    }
});


module.exports = router;