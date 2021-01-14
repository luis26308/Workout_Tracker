// const router = require("express").Router();
// const Workout = require("../models/workout")


// router.get("/api/workouts", (req, res) => {
//     Workout.find({})
//         .then((workoutResponse) => {
//             res.json(workoutResponse);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });

// router.put("/api/workouts/:id", (req, res) => {
//     const { body, params } = req;
// console.log(body, params)
//     Workout.findOneAndUpdate({_id:params.id}, 
//         {$push: { exercise: body} },
//         {new: true}
//     )
//         .then((workoutResponse) => {
//             console.log(workoutResponse)
//             res.json(workoutResponse);
//         })
//         .catch((err) => {
//             console.log(err)
//             res.status(400).json(err);
//         })
// })

// router.post("/api/workouts", (req, res) => {
//     Workout.create(req.body)
//         .then((workoutResponse) => {
//             res.json(workoutResponse);
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         });
// })

// router.post("/api/workouts/range", (req, res) => {
//     Workout.find({})
//         .then((workoutResponse) => {
//             res.json(workoutResponse);
//         })
//         .catch((err) => {
//             res.status(400).json(err)
//         });
// })

// module.exports = router


const router = require("express").Router();
const Workout = require("../models/workout.js");
router.get('/api/workouts', (req, res) => {
  Workout.find()
  .then(workout => res.json(workout))
  .catch(error => console.log(error))
})
// router.get('/api/workouts/:id', (req, res) => {
//   Workout.findOne(
//     { _id: req.params.id }
//   )
//   .then(workout => res.json(workout))
//   .catch(error => console.log(error))
// })
router.get('/api/workouts/range', (req, res) => {
  Workout.find({})
  .sort({ $natural: -1 })
  .limit(7)
  .then(workout => res.json(workout))
  .catch(error => console.log(error))
})
router.post('/api/workouts', (req, res) => {
  Workout.create({})
  .then(workout => {
    console.log(workout)
    res.json(workout)
  })
  .catch(error => console.log(error))
})
router.put('/api/workouts/:id', (req, res) => {
  Workout.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true })
    .then(workout => res.json(workout))
    .catch(error => console.log(error))
})
router.delete('/api/workouts/:id', (req, res) => {
  Workout.findOneAndDelete( { _id: req.params.id } )
  .then(() => res.json(true))
  .catch(error => console.log(error))
})
module.exports = router;