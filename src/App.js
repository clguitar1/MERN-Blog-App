import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import CampgroundsList from './components/CampgroundsList';
import CreateCampground from './components/CreateCampground';
import CreateUser from './components/CreateUser';
import EditCampground from './components/EditCampground';
// start react app with 'npm start' (port 3000) and start database connection with 'nodemon server' (port 5000) in a separate terminal.

// nodemon is installed globally

function App() {
  return (
    <Router>
      <Navbar />

      <div className="App container">
        <br />
        <Route path="/" exact component={CampgroundsList} />
        <Route path="/edit/:id" component={EditCampground} />
        <Route path="/create" component={CreateCampground} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
