const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },


        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                weight: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                duration: {
                    type: Number,
                },
                distance: {
                    type: Number,
                }
            }
        ]
    });


const Workout = mongoose.model("Transaction", workoutSchema);

module.exports = Workout;