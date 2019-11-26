import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Campground = props => (
  <tr>
    <td>{props.campground.username}</td>
    <td>{props.campground.description}</td>
    <td>{props.campground.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.campground._id} >edit</Link> | <a href="#" onClick={() => { props.deleteCampground(props.campground._id) }}>delete</a>
    </td>
  </tr>
)

class CampgroundsList extends Component {
  constructor(props) {
    super(props);
    this.state = { campgrounds: [] };

    this.deleteCampground = this.deleteCampground.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/campgrounds/')
      .then(response => {
        this.setState({ campgrounds: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }

  deleteCampground(id) {
    axios.delete('http://localhost:5000/campgrounds/' + id)
      .then(res => console.log(res.data));
    this.setState({
      campgrounds: this.state.campgrounds.filter(el => el._id !== id)
    });
  }

  campgroundsList() {
    return this.state.campgrounds.map(currCampground => {
      return <Campground campground={currCampground} deleteCampground={this.deleteCampground} key={currCampground._id} />
    })
  }

  render() {
    return (
      <div className='CampgroundsList'>
        <h1>Campgrounds List</h1>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.campgroundsList()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CampgroundsList;