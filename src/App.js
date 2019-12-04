import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import BlogsList from './components/BlogsList';
import CreateBlog from './components/CreateBlog';
import EditBlog from './components/EditBlog';
import ShowBlog from './components/ShowBlog';
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
          <Switch>
            <Route exact path="/blogs" component={BlogsList} />
            <Route exact path="/"><Redirect to="/blogs" /></Route >
            <Route exact path="/blogs/new" component={CreateBlog} />
            <Route exact path="/blogs/:id" component={ShowBlog}
            />
            <Route exact path="/blogs/:id/edit" component={EditBlog} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
