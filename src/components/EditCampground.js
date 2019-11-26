import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

class EditCampground extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    // get the campground we want to edit
    axios.get('http://localhost:5000/campgrounds/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          description: response.data.description,
          date: new Date(response.data.date)
        })
      })
      .catch(error => console.log(error));

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username)
          })
        }
      })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const campground = {
      username: this.state.username,
      description: this.state.description,
      date: this.state.date
    }
    console.log(campground);
    // Update a campground
    axios.post('http://localhost:5000/campgrounds/update/' + this.props.match.params.id, campground)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
      <div className='EditCampground'>
        <h1>Edit A Campground</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {
                this.state.users.map(user => {
                  return <option key={user} value={user}>{user}</option>
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription} />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Edit Campground"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditCampground;