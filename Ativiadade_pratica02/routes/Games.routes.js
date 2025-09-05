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

//GET
router.get('/', async(req,res,next) => {
    try {
        const games = await Games.find();
        return res.status(200).json(games);
    } catch (error) {
        next(error);
    }
});

//GET BY ID
router.get('/:id', async(req,res,next) => {
    try {
        const games = await Games.findById(req.params.id);
        if(!games){
            return res.status(404).json({erro:"Game não registrado"});
        }
        return res.json(games);
    } catch (error) {
        next(error);
    }
});
//UPDATE
router.put('/:id', async(req,res,next) => {
    try {
        const games  = await Games.findByIdAndUpdate(req.params.id, req.body, {
            new:true, 
            runValidators:true
        });
        if(!games){
            return res.status(404).json({erro:"Id do game não encontrado"});
        }
        return res.json(games);
    } catch (error) {
        next(error);
    }
});
//DELETE 
router.delete('/:id', async(req,res, next) => {
    try {
        const games = await Games.findByIdAndDelete(req.params.id);
        if(!games){
            return res.status(404).json({erro:"Id do game não encontrado"});
        }
        return res.status(204) .send(); 
    } catch (error) {
        next(error);
        
    }
});
module.exports = router;