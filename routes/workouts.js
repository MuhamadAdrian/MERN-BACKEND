const express = require('express')
const router = express.Router();
const Workout = require('../models/Workout');

router.get('/', (req, res) => {
    res.json({msg: 'Get All Workouts'});
});

router.get('/:id', (req, res) => {
    res.json({msg: 'Get Single Workout'});
});

router.post('/', async (req, res) => {
    const {title, reps, load} = req.body;
    try{        
        const workout = await Workout.create({
            title,
            reps,
            load
        });

        return res.status(200).json({
            data: workout,
            meta: {
                status: 200
            }
        });
    }catch(err){
        return res.status(400).json({
            error: err
        });
    }
});

router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete Workout'});
});

router.patch('/:id', (req, res) => {
    res.json({msg: 'Update Workout'});
});

module.exports = router;