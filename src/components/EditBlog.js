import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EditBlog extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      image: '',
      body: '',
      date: new Date()
    };
  }

  componentDidMount() {
    // get the campground we want to edit and setState with it
    axios.get('http://localhost:5000/blogs/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          image: response.data.image,
          body: response.data.body
        })
      })
      .catch(error => console.log(error));
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
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
    // Update a blog
    axios.put('http://localhost:5000/blogs/' + this.props.match.params.id, blog)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className='EditBlog p-3'>
        <h1>Edit Blog</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              name='title'
              type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Image Url</label>
            <input
              name='image'
              type="text"
              required
              className="form-control"
              value={this.state.image}
              onChange={this.handleInputChange} />
          </div>
          <div className="form-group">
            <label>Blog Content</label>
            <textarea
              name='body'
              type="text"
              required
              className="form-control"
              value={this.state.body}
              onChange={this.handleInputChange}></textarea>
          </div>
          <button className="btn btn-outline-danger">Submit</button>
          <Link to='/' className="btn btn-outline-secondary">Go Back</Link>
        </form>
      </div>
    );
  }
}

export default EditBlog;