import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BlogDetails extends Component {
  // do a componentDidMount with axios.get + this.match.params.id then setState with the response data, then display the state data
  constructor(props) {
    super(props);
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

  render() {
    const { _id, title, image, created, body } = this.state.blog;
    const createdDate = new Date(created);
    return (
      <div key={_id} className='BlogDetails row'>
        <div>
          <div className="item">
            <h1 className="">{title}</h1>
            <img src={image} alt={image} />
            <div className="content">
              <span>{createdDate.toDateString()}</span>
            </div>
            <p className='lead'>{body}</p>
          </div>
          <Link className="btn btn-sm btn-outline-secondary" to="/">Back</Link>
          <Link className="btn btn-sm btn-outline-secondary" to={`/blogs/${_id}/edit`}>Edit</Link>
        </div>
      </div>
    );
  }
}

export default BlogDetails;

