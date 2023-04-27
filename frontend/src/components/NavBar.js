import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-sm px-5">
          <a className="navbar-brand" href="/">
            <i className="bi bi-github m-2"></i>
            Takin' Quizzes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">    
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {this.props.isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/Quizzes">
                    Quizzes
                  </Link>
                </li>
              )}
              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    Logout
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="https://github.com/login/oauth/authorize?client_id=5c7e7b4931784167cbff"
                  >
                    Login
                  </Link>
                </li>
              )}  
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
