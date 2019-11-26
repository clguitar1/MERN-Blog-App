import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// const Blog = props => (
//   <tr>
//     <td>{props.blog.title}</td>
//     <td>{props.blog.image}</td>
//     <td>{props.blog.created.substring(0, 10)}</td>
//     <td>
//       <Link to={"/edit/" + props.blog._id} >edit</Link> | <a href="#" onClick={() => { props.deleteCampground(props.blog._id) }}>delete</a>
//     </td>
//   </tr>
// )

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
        console.log(this.state.blogs);
      })
      .catch(error => {
        console.log(error);
      })
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
      <div className='BlogsList'>
        <h1>Blogs List</h1>
        {this.state.blogs.map(blog => {
          return (
            <div>
              <h2>{blog.title}</h2>
              <img src={blog.image} alt="" />
              <p>{blog.body}</p>
              <span>{blog.created}</span>
            </div>
          )
        })}
      </div>
    );
  }
}

export default BlogsList;