const router = require("express").Router();
const db = require("../models")


router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then((workoutResponse) => {
            res.json(workoutResponse);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/api/workout/:id", (req, res) => {
    const { body, params } = req;

    db.Workout.findByIdAndUpdate(params.id, {
        $push: { exercise: body },
    })
        .then((workoutResponse) => {
            res.json(workoutResponse);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((workoutResponse) => {
            res.json(workoutResponse);
        })
        .catch((err) => {
            res.status(400).json(err)
        });
})

router.post("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then((workoutResponse) => {
            res.json(workoutResponse);
        })
        .catch((err) => {
            res.status(400).json(err)
        });
})

module.exports = router