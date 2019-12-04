import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ShowBlog extends Component {
  // do a componentDidMount with axios.get + this.match.params.id then setState with the response data, then display the state data
  constructor(props) {
    super(props);
    this.deleteBlog = this.deleteBlog.bind(this);

    this.state = { blog: [] };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/blogs/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ blog: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteBlog() {
    console.log(this.state.blog._id);
    console.log(this.props.match.params.id);
    axios.delete(`http://localhost:5000/blogs/${this.state.blog._id}`)
      .then(response => {
        this.props.history.push('/')
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { _id, title, image, created, body } = this.state.blog;
    const createdDate = new Date(created);
    return (
      <div key={_id} className='ShowBlog row'>
        <div>
          <div className="item">
            <h1 className="">{title}</h1>
            <img src={image} alt={image} />
            <div className="content">
              <span>{createdDate.toDateString()}</span>
            </div>
            <p className='lead'>{body}</p>
          </div>
          <div>
            <Link className="btn btn-outline-secondary mr-2" to="/">Back</Link>
            <Link className="btn btn-outline-success mr-2" to={`/blogs/${_id}/edit`}>Edit</Link>
            <button onClick={this.deleteBlog} className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowBlog;

