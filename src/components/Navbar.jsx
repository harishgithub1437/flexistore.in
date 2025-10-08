import React from "react";
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
              <a className="navbar-brand" href="#">
                <img src={logo} alt="logo" className="img-fluid" width="180px" />
              </a>
            </div>

            <div className="d-none d-md-block position-absolute top-50 start-50 translate-middle align-items-center">
              <nav className="d-flex align-items-center navigation-desk me-4">
                <a href="#advantage" className="text-decoration-none mx-3">Why Flexi Store</a>
                <a href="#features" className="text-decoration-none mx-3">Features</a>
                <a href="#case" className="text-decoration-none mx-3">Case Study</a>
              </nav>
            </div>

            <div className="d-none d-md-block">
              {/* ✅ Button automatically triggers modal */}
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

      {/* ✅ Make sure the modal exists in DOM */}
      <ContactModel />
    </>
  );
}

export default Navbar;
