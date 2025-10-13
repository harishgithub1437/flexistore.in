import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function JoinSuccessSection() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-3 fs-2">
          Ready to Join Our{" "}
          <span style={{ color: "#ff9a00" }}>Success Stories</span>?
        </h2>
        <p className="text-muted mb-4 fs-5">
          Let's discuss how FlexiStore can transform your e-commerce business.
          Book a free strategy call with our team today.
        </p>

        <button
          className="btn fw-semibold px-4 py-3 mt-2"
          style={{
            background: "linear-gradient(135deg, #ff9a00, #ff6a00)",
            color: "#fff",
            borderRadius: "50px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.boxShadow = "0 6px 14px rgba(255,106,0,0.4)")
          }
          onMouseOut={(e) =>
            (e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)")
          }
        >
          Book Your Free Strategy Call
        </button>
      </div>
    </section>
  );
}
