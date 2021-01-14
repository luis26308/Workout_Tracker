// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const workoutSchema = new Schema(
//     {
//         day: {
//             type: Date,
//             default: Date.now
//         },


//         exercises: [
//             {
//                 name: {
//                     type: String,
//                     trim: true,
//                     required: "Enter an exercise name"
//                 },
//                 type: {
//                     type: String,
//                     trim: true,
//                     required: "Enter an exercise type"
//                 },
//                 weight: {
//                     type: Number,
//                 },
//                 sets: {
//                     type: Number,
//                 },
//                 reps: {
//                     type: Number,
//                 },
//                 duration: {
//                     type: Number,
//                 },
//                 distance: {
//                     type: Number,
//                 }
//             }
//         ]
//     }, 
//     { toJSON: { virtuals: true } }

// );
// workoutSchema.virtual("totalDuration").get(function () {
//     return this.exercises.reduce((total, exercise) => {
//         return total + exercise.duration
//     }, 0)
// })

// const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = Workout;


const mongoose = require('mongoose');
//day, exercises [type, name, duration] weight reps sets distance
const workoutSchema = new mongoose.Schema(
    {
        day: { type: Date, default: Date.now },
        exercises: [
            {
                exercise_type: { type: String, trim: true },
                name: { type: String, trim: true },
                duration: { type: Number },
                weight: { type: Number },
                reps: { type: Number },
                sets: { type: Number },
                distance: { type: Number }
            }
        ]
    },
    {
        toJSON: {
            // include any virtual properties when data is requested
            virtuals: true
        }
    }
)
workoutSchema.virtual("totalDuration").get(function () {
    // "reduce" array of exercises down to just the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});
const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;