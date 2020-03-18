const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Workout = require('../models/Workout');

// @route    GET  api/workouts
// @dec      Get all users workouts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(workouts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST  api/workouts
// @dec      Add new workout
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('workoutday', 'Workout is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { workoutday, exercise, weight, sets, reps } = req.body;

    try {
      const newWorkout = new Workout({
        workoutday,
        exercise,
        weight,
        sets,
        reps,
        user: req.user.id
      });

      const workout = await newWorkout.save();

      res.json(workout);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    PUT  api/workouts/:id
// @dec      Update workout
// @access   Private
router.put('/:id', auth, async (req, res) => {
  const { workoutday, exercise, weight, sets, reps } = req.body;

  // Build a workout object
  const workoutFields = {};
  if (workoutday) workoutFields.workoutday = workoutday;
  if (exercise) workoutFields.exercise = exercise;
  if (weight) workoutFields.weight = weight;
  if (sets) workoutFields.sets = sets;
  if (reps) workoutFields.reps = reps;

  try {
    let workout = await Workout.findById(req.params.id);

    if (!workout) return res.status(404).json({ msg: 'Workout not found' });

    // Make sure user owns the workout
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    workout = await Workout.findByIdAndUpdate(
      req.params.id,
      { $set: workoutFields },
      { new: true }
    );

    res.json(workout);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE  api/workouts/:id
// @dec      Delete workout
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let workout = await Workout.findById(req.params.id);

    if (!workout) return res.status(404).json({ msg: 'Workout not found' });

    // Make sure user owns the workout
    if (workout.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Workout.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Workout removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
