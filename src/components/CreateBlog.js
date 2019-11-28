import React, { Component } from 'react';
import "react-datepicker/dist/react-datepicker.css";
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
      body: '',
      date: new Date()
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
      body: this.state.body,
      date: this.state.date
    }
    console.log(blog);

    axios.post('http://localhost:5000/blogs/new', blog)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className='CreateBlog ui middle aligned center aligned grid'>

        <div className="column">
          <h2 className="ui teal image header">
            New Blog
          </h2 >

          <form className="ui large form" onSubmit={this.onSubmit}>

            <div className="ui stacked segment">

              <div className="field">
                <label>Title</label>
                <div className="ui left input">
                  <input
                    type="text"
                    name="title"
                    required
                    value
                    placeholder="Title"
                    value={this.state.title}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="field">
                <label>Image</label>
                <div className="ui left input">
                  <input
                    type="text"
                    name="image"
                    placeholder="Image"
                    value={this.state.image}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>

              <div className="field">
                <label>Blog Content</label>
                <div className="ui left input">
                  <textarea
                    name="body"
                    placeholder="Blog post goes here"
                    value={this.state.body}
                    onChange={this.handleInputChange}
                  >
                  </textarea>
                </div>
              </div>

              <input type="submit" className="ui fluid large teal submit button" />

            </div>

            <div className="ui error message"></div>

          </form>

        </div>

      </div>
    );
  }
}

export default CreateBlog;