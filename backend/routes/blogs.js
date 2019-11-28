const router = require('express').Router();
let Blog = require('../models/blog.model');

// NEW Get all blogs
router.route('/').get((req, res) => {
  // get all the blogs and return them as json
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json("Error: " + err));
});

// NEW is in App.js as /blogs/new route

// CREATE Add a new blog
router.route('/new').post((req, res) => {
  // const title = req.body.title;
  // const image = req.body.image;
  // const body = req.body.body;
  // const created = Date.parse(req.body.created);

  // const newBlog = new Blog({
  //   title,
  //   image,
  //   body,
  //   created
  // });

  // newBlog.save()
  //   .then(() => res.json('Blog added!'))
  //   .catch(err => res.status(400).json("Error: " + err));

  Blog.create(req.body, (err, newBlog) => {
    if (err) {
      res.status(400).json('Error: ' + err);
    } else {
      console.log('Blog added');
      res.json('Blog added!');
    }
  })
});

// Get a single campground
router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json("Error: " + err));
});

// Delete a campground
router.route('/:id').delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json("Blog deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// Edit a Blog
router.route('/update/:id').post((req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      blog.username = req.body.username;
      blog.description = req.body.description;
      blog.date = Date.parse(req.body.date);

      blog.save()
        .then(() => res.json('Blog updated!'))
        .catch(err => res.status(400).json("Error: " + err));
    })
});

module.exports = router;
