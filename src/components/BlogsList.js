import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };

    // this.deleteCampground = this.deleteCampground.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/blogs')
      .then(response => {
        this.setState({ blogs: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  // deleteCampground(id) {
  //   axios.delete('http://localhost:5000/campgrounds/' + id)
  //     .then(res => console.log(res.data));
  //   this.setState({
  //     campgrounds: this.state.campgrounds.filter(el => el._id !== id)
  //   });
  // }

  // campgroundsList() {
  //   return this.state.campgrounds.map(currCampground => {
  //     return <Campground campground={currCampground} deleteCampground={this.deleteCampground} key={currCampground._id} />
  //   })
  // }

  render() {
    return (
      <div className='BlogsList row'>
        {this.state.blogs.map(blog => {
          const { body, created, image, _id, title } = blog;
          const createdDate = new Date(created);
          return (
            <div key={_id} className="col-md-4">
              <div className='BlogDetails card mb-4 shadow-sm'>
                <img className='card-img-top' src={image} alt={image} width='100%' height='225' />
                <div className='card-body'>
                  <h5 className='card-title'>{title}</h5>
                  <p className='card-text'>{`${body.substring(0, 100)}...`}</p>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className="btn-group">
                      <Link className="btn btn-sm btn-outline-secondary" to={`/blogs/${_id}`}>View</Link>
                      <Link className="btn btn-sm btn-outline-secondary" to={`/blogs/${_id}/edit`}>Edit</Link>
                    </div>
                    <small className='ml-3 text-muted'>{createdDate.toDateString()}</small>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default BlogsList;