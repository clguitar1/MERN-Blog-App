import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import BlogsList from './components/BlogsList';
import CreateBlog from './components/CreateBlog';
import CreateUser from './components/CreateUser';
import EditCampground from './components/EditCampground';
import BlogDetails from './components/BlogDetails';
import Footer from './components/Footer';
// start react app with 'npm start' (port 3000) and start database connection with 'nodemon server' (port 5000) in a separate terminal.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { blogs: [] };
  }

  render() {
    return (
      <Router>
        <Navbar />
        <div className="App container">
          <br />
          <Switch>
            <Route exact path="/blogs" component={BlogsList} />
            <Route exact path="/"><Redirect to="/blogs" /></Route >
            <Route exact path="/blogs/new" component={CreateBlog} />
            <Route exact path="/blogs/:id" component={BlogDetails}
            />
            <Route exact path="/edit/:id" component={EditCampground} />
            <Route exact path="/user" component={CreateUser} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
