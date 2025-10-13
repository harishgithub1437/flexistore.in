import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/WhoWeAre.css"

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="fw-bold mb-3">
              Who <span className="text-warning">We Are</span>
            </h2>
            <p className="text-muted mb-4">
              FlexiStore is a team of passionate technologists, designers, and
              business strategists who believe that every business deserves
              access to world-class e-commerce technology—regardless of size or
              budget.
            </p>

            <div className="vision-mission-box p-4 rounded-3 position-relative">
              <div className="vision-item mb-4">
                <h5 className="fw-bold">
                  <i className="bi bi-eye-fill text-warning me-2"></i>
                  Our Vision
                </h5>
                <p className="text-muted ms-4">
                  To become the go-to platform for businesses seeking complete
                  control over their e-commerce destiny, free from the
                  limitations of generic solutions.
                </p>
              </div>

              <div className="mission-item">
                <h5 className="fw-bold">
                  <i className="bi bi-check-circle-fill text-warning me-2"></i>
                  Our Mission
                </h5>
                <p className="text-muted ms-4">
                  To empower businesses with custom e-commerce platforms that
                  are powerful, affordable, and designed to scale—eliminating
                  the need for expensive agencies or complex technical
                  knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="features-card bg-white shadow-sm p-4 rounded-4">
              <div className="row text-center">
                <div className="col-6 mb-4">
                  <div className="icon-circle mb-3 mx-auto">
                    <i className="bi bi-lightning-charge-fill text-white fs-4"></i>
                  </div>
                  <h6 className="fw-bold">Lightning Fast</h6>
                  <p className="text-muted small">
                    Optimized for speed and performance
                  </p>
                </div>

                <div className="col-6 mb-4">
                  <div className="icon-circle mb-3 mx-auto">
                    <i className="bi bi-shield-check text-white fs-4"></i>
                  </div>
                  <h6 className="fw-bold">Secure</h6>
                  <p className="text-muted small">
                    Enterprise-grade security built-in
                  </p>
                </div>

                <div className="col-6">
                  <div className="icon-circle mb-3 mx-auto">
                    <i className="bi bi-people-fill text-white fs-4"></i>
                  </div>
                  <h6 className="fw-bold">Customer-First</h6>
                  <p className="text-muted small">
                    Built with your success in mind
                  </p>
                </div>

                <div className="col-6">
                  <div className="icon-circle mb-3 mx-auto">
                    <i className="bi bi-arrow-up-right-circle-fill text-white fs-4"></i>
                  </div>
                  <h6 className="fw-bold">Scalable</h6>
                  <p className="text-muted small">
                    Grows with your business needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
