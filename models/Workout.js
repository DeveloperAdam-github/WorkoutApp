const mongoose = require('mongoose');

const WorkoutSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  workoutday: {
    type: String,
    required: true
  },
  exercise: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    default: 0
  },
  sets: {
    type: Number,
    default: '0'
  },
  reps: {
    type: Number,
    default: '0'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('workout', WorkoutSchema);
