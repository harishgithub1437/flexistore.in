import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import "../styles/Navbar.css";
import ContactModel from "./ContactModel";

function Navbar() {
  return (
    <>
      <header className="sticky-header py-3">
        <div className="container position-relative">
          <div className="d-flex justify-content-center justify-content-md-between align-items-center position-relative">
            
            <div>
              <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" className="img-fluid" width="180px" />
              </Link>
            </div>

            <div className="d-none d-md-block position-absolute top-50 start-50 translate-middle align-items-center">
              <nav className="d-flex align-items-center navigation-desk me-4">
                <a href="#advantage" className="text-decoration-none mx-3">Why Flexi Store</a>
                <a href="#features" className="text-decoration-none mx-3">Features</a>
                <a href="#case" className="text-decoration-none mx-3">Case Study</a>
                <Link to="/Home" className="text-decoration-none mx-3">Home</Link>
                <Link to="/about" className="text-decoration-none mx-3">About Us</Link>
              </nav>
            </div>

            <div className="d-none d-md-block">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#demoFormModal"
              >
                Book a Free Strategy Call
              </button>
            </div>
          </div>
        </div>
      </header>

      <ContactModel />
    </>
  );
}

export default Navbar;