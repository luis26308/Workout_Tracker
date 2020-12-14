const router = require("express").router();
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

})

router.post("/api/workouts", (req, res) => {
    
})