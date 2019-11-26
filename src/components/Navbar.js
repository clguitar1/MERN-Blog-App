import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <div>
      {/* <nav className='Navbar navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to="/" className="navbar-brand" >Campgrounds Tracker</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Campgrounds</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Campground</Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">Create User</Link>
            </li>
          </ul>
        </div>

      </nav> */}

      <div className="Navbar ui fixed inverted menu">
        <div className="item"><i className="bell outline icon"></i>Blog Site</div>
        <Link to="/" className="item">Home</Link>
        <Link to="/create" className="item">Create Post</Link>
        <Link to="/user" className="item">Create User</Link>
        <Link to="/blogs/new" className="item">New Post</Link>
      </div>

    </div>
  );
}

export default Navbar;