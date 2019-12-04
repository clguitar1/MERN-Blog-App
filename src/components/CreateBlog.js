import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CreateBlog.css';

class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      image: '',
      body: ''
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const blog = {
      title: this.state.title,
      image: this.state.image,
      body: this.state.body
    }
    console.log(blog);

    axios.post('http://localhost:5000/blogs', blog)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className='CreateBlog p-3'>
        <h2>
          New Blog Post
          </h2 >
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              required
              placeholder="Title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="text"
              name="image"
              placeholder="Image"
              className="form-control"
              value={this.state.image}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Blog Content</label>
            <textarea
              name="body"
              placeholder="Blog post goes here"
              className="form-control"
              value={this.state.body}
              onChange={this.handleInputChange}
            >
            </textarea>
          </div>
          <button className="btn btn-outline-danger">Submit</button>
          <Link to='/' className="btn btn-outline-secondary">Go Back</Link>
        </form>

      </div>
    );
  }
}

export default CreateBlog;