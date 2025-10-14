import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function JourneyCard({ year, title, description }) {
  return (
    <div className="card border-0 bg-transparent text-center">
      <div
        className="mx-auto d-flex align-items-center justify-content-center mb-3"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #ff9a00, #ff6a00)",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "22px",
        }}
      >
        {year}
      </div>
      <div className="card-body">
        <h5 className="card-title fw-semibold">{title}</h5>
        <p className="card-text text-muted">{description}</p>
      </div>
    </div>
  );
}

export default function OurJourney() {
  const journeyData = [
    {
      year: "2019",
      title: "The Idea",
      description:
        "Founded with a vision to democratize e-commerce technology for businesses of all sizes.",
    },
    {
      year: "2021",
      title: "First 100 Clients",
      description:
        "Reached our first major milestone, proving our approach works for diverse business models.",
    },
    {
      year: "2024",
      title: "Platform Evolution",
      description:
        "Launched advanced B2B2C features and NBFC credit integration for complete business solutions.",
    },
  ];

  return (
    <section className="py-5 text-center">
      <h2 className="fw-bold mb-5">Our Journey</h2>
      <div className="container">
        <div className="row justify-content-center">
          {journeyData.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <JourneyCard
                year={item.year}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
