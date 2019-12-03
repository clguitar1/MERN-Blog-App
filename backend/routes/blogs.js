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
  Blog.create(req.body, (err, newBlog) => {
    if (err) {
      res.status(400).json('Error: ' + err);
    } else {
      console.log('Blog added');
      res.json('Blog added!');
    }
  })
});

// SHOW get a single blog post
router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      res.status(400).json('Error: ' + err);
    } else {
      res.json(foundBlog);
    }
  })
});

// Delete a campground
router.route('/:id').delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json("Blog deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

// // Edit a Blog
// router.route('/update/:id').post((req, res) => {
//   Blog.findById(req.params.id)
//     .then(blog => {
//       blog.username = req.body.username;
//       blog.description = req.body.description;
//       blog.date = Date.parse(req.body.date);

//       blog.save()
//         .then(() => res.json('Blog updated!'))
//         .catch(err => res.status(400).json("Error: " + err));
//     })
// });

// UPDATE - the get part of the route .get('/blogs/:id/edit') is set in App.js as <Route exact path="/blogs/:id/edit" component={EditBlog} /> and a componentDidMount in EditBlog.js.
router.route('/:id').put((req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body, (err, updatedBlog) => {
    if (err) {
      res.status(400).json(err);
      console.log(err);
    } else {
      res.json(updatedBlog);
      console.log('Updated!');
    }
  })
});

module.exports = router;
