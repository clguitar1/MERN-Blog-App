// const router = require('express').Router();
const express = require('express');
const router = express.Router();
const Blog = require('../models/blog.model');

// INDEX Get all blogs.
router.get('/', (req, res) => {
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json("Error: " + err));
});

// NEW /blogs/new is in App.js 

// CREATE Add a new blog
router.post('/', (req, res) => {
  Blog.create(req.body, (err, newBlog) => {
    if (err) {
      res.status(400).json('Error: ' + err);
    } else {
      console.log('Blog added');
      res.json('Blog added!');
    }
  });
});

// SHOW get a single blog post
router.get('/:id', (req, res) => {
  Blog.findById(req.params.id, (err, foundBlog) => {
    if (err) {
      res.status(400).json('Error: ' + err);
    } else {
      res.json(foundBlog);
    }
  });
});

// UPDATE - the get part of the route .get('/blogs/:id/edit') is set in App.js as <Route exact path="/blogs/:id/edit" component={EditBlog} /> and a componentDidMount in EditBlog.js.
router.put('/:id', (req, res) => {
  Blog.findByIdAndUpdate(req.params.id, req.body, (err, updatedBlog) => {
    if (err) {
      res.status(400).json(err);
      console.log(err);
    } else {
      res.json(updatedBlog);
      console.log('Updated!');
    }
  });
});

// DELETE    /blogs/:id delete a blog then redirect Blog.findByIdAndRemove().
// Delete UI is in ShowBlog.js including redirect.
router.delete('/:id', (req, res) => {
  Blog.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.status(400).json(err);
      console.log(err);
    } else {
      res.json('Blog Deleted!');
      console.log('Blog Deleted!');
    }
  });
});

module.exports = router;
