import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import BlogsList from './components/BlogsList';
import CreateBlog from './components/CreateBlog';
import CreateUser from './components/CreateUser';
import EditCampground from './components/EditCampground';
import Footer from './components/Footer';
// start react app with 'npm start' (port 3000) and start database connection with 'nodemon server' (port 5000) in a separate terminal.

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App container">
        <br />
        <Route path="/blogs" exact component={BlogsList} />
        <Route path="/" exact ><Redirect to="/blogs" /></Route >
        <Route path="/edit/:id" component={EditCampground} />
        <Route path="/blogs/new" component={CreateBlog} />
        <Route path="/user" component={CreateUser} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
