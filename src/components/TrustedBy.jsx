import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/TrustedBy.css";

const TrustedBy = () => {
  const testimonials = [
    {
      initials: "MG",
      name: "Manish Gupta",
      title: "CEO, TechParts Ltd",
      text: `"FlexiStore transformed our B2B operations completely. The custom platform they built handles our complex pricing and approval workflows perfectly."`,
    },
    {
      initials: "AS",
      name: "Anita Singh",
      title: "Founder, Fashion Forward",
      text: `"Finally, an e-commerce solution that actually understands our business needs. The support team is incredible and always available."`,
    },
    {
      initials: "VK",
      name: "Vikram Khanna",
      title: "Director, Home Essentials",
      text: `"We moved from Shopify to FlexiStore and couldn't be happier. The customization possibilities are endless and the cost is so much better."`,
    },
  ];

  const logos = [1, 2, 3, 4, 5];

  return (
    <section className="trusted-by-section py-5 text-center">
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold mb-3">
          Trusted <span className="text-warning">By</span>
        </h2>
        <p className="text-muted mb-5 fs-5">
          Businesses across industries trust FlexiStore to power their
          e-commerce success
        </p>

        {/* Logos */}
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="logo-placeholder d-flex align-items-center justify-content-center"
            >
              <span className="text-muted fw-bold">LOGO</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="row justify-content-center">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="testimonial-card text-start bg-white p-4 rounded-4 shadow-sm h-100">
                <div className="mb-3 text-warning">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                </div>
               
                <p className="fst-italic text-secondary mb-4">{t.text}</p>
                <div className="d-flex align-items-center">
                  <div className="avatar-circle me-3">
                    <span className="text-white fw-bold">{t.initials}</span>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-0">{t.name}</h6>
                    <small className="text-muted">{t.title}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
