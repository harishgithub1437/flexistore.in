import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ValueCard({ icon, title, description, points }) {
  return (
    <div className="card border-0 shadow-sm text-center p-4 rounded-4 h-100">
      <div
        className="mx-auto d-flex align-items-center justify-content-center mb-3"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff9a00, #ff6a00)",
          color: "#fff",
          fontSize: "28px",
        }}
      >
        {icon}
      </div>
      <div className="card-body">
        <h5 className="fw-semibold mb-3">{title}</h5>
        <p className="text-muted">{description}</p>
        <ul className="list-unstyled text-start d-inline-block mt-3">
          {points.map((point, i) => (
            <li key={i} className="mb-2">
              <span
                style={{
                  color: "#ff9a00",
                  marginRight: "8px",
                  fontWeight: "bold",
                }}
              >
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function OurValues() {
  const valuesData = [
    {
      icon: "💡",
      title: "Simplicity",
      description:
        "We believe powerful technology should be simple to use. Complex problems deserve elegant, straightforward solutions.",
      points: [
        "Intuitive interfaces",
        "Clear communication",
        "Streamlined processes",
      ],
    },
    {
      icon: "💲",
      title: "Affordability",
      description:
        "Enterprise-level e-commerce shouldn't break the bank. We make powerful platforms accessible to businesses of all sizes.",
      points: ["Transparent pricing", "No hidden fees", "Maximum ROI"],
    },
    {
      icon: "🛠️",
      title: "End-to-End Support",
      description:
        "From initial consultation to ongoing maintenance, we're your dedicated technology partner every step of the way.",
      points: [
        "24/7 availability",
        "Proactive monitoring",
        "Continuous improvement",
      ],
    },
  ];

  return (
    <section className="py-5 text-center" style={{ backgroundColor: "#fafafa" }}>
      <h2 className="fw-bold mb-2">
        Our <span style={{ color: "#ff9a00" }}>Values</span>
      </h2>
      <p className="text-muted mb-5">
        These core principles guide everything we do and every decision we make.
      </p>

      <div className="container">
        <div className="row justify-content-center">
          {valuesData.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <ValueCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                points={item.points}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
