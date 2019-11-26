const router = require('express').Router();
let Campground = require('../models/campground.model');

// Get all campgrounds
router.route('/').get((req, res) => {
  // get all the campgrounds and return them as json
  Campground.find()
    .then(campgrounds => res.json(campgrounds))
    .catch(err => res.status(400).json("Error: " + err));
});

// Add a new campground
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const date = Date.parse(req.body.date);

  const newCampground = new Campground({
    username,
    description,
    date
  });

  newCampground.save()
    .then(() => res.json('Campground added!'))
    .catch(err => res.status(400).json("Error: " + err));
});

// Get a single campground
router.route('/:id').get((req, res) => {
  Campground.findById(req.params.id)
    .then(campgound => res.json(campgound))
    .catch(err => res.status(400).json("Error: " + err));
});

// Delete a campground
router.route('/:id').delete((req, res) => {
  Campground.findByIdAndDelete(req.params.id)
    .then(() => res.json("Campground deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// Edit a campground
router.route('/update/:id').post((req, res) => {
  Campground.findById(req.params.id)
    .then(campground => {
      campground.username = req.body.username;
      campground.description = req.body.description;
      campground.date = Date.parse(req.body.date);

      campground.save()
        .then(() => res.json('Campground updated!'))
        .catch(err => res.status(400).json("Error: " + err));
    })
});

module.exports = router;
