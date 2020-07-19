const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

const jobSchema = require('../models/job');

router.route('/create-job').post((req, res) => {
    jobSchema.create(req.body, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data);
            res.json(data);
        }
    })
})

router.route('/jobs').get((req, res) => {
    jobSchema.find((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data)
        }
    })
})

// Get Single Job
router.route('/edit-job/:id').get((req, res, next) => {
    jobSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Job
router.route('/edit-job/:id').put((req, res, next) => {
    jobSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            // return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Job updated successfully !')
        }
    })
})

// Delete Student
router.route('/delete-job/:id').delete((req, res, next) => {
    jobSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;