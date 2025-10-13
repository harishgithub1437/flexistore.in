import React from 'react'
import "../styles/AboutUs.css"
import MissionSec from '../components/MissionSec';
import OurJourney from '../components/JourneyCard';
import OurValues from '../components/OurValues';
import JoinSuccessSection from '../components/JoinSuccessSection';
import OurStory from '../components/OurStory';
import WhoWeAre from '../components/WhoWeAre';
import TrustedBy from '../components/TrustedBy';
const teamMembers = [
    {
        initials: "RK",
        name: "Rajesh Kumar",
        role: "Founder & CEO",
        description:
            "15+ years in e-commerce technology, passionate about democratizing online business tools.",
    },
    {
        initials: "PS",
        name: "Priya Sharma",
        role: "Head of Technology",
        description:
            "Expert in scalable architecture and cloud infrastructure with a focus on performance.",
    },
    {
        initials: "AM",
        name: "Amit Mehta",
        role: "Lead Designer",
        description:
            "Creates beautiful, user-centric designs that convert visitors into customers.",
    },
    {
        initials: "SK",
        name: "Sarah Khan",
        role: "Customer Success",
        description:
            "Ensures every client achieves their business goals with dedicated support and guidance.",
    },
];

function AboutUs() {
    return (
        <div>
            <MissionSec />
             <WhoWeAre/>
             <OurStory />
              <OurJourney />
                <OurValues />
            <section className="py-5 bg-white text-center">
                <div className="container">
                    <h2 className="fw-bold mb-2">
                        Meet Our <span style={{ color: "#f7931e" }}>Team</span>
                    </h2>
                    <p className="text-muted mb-5">
                        The passionate professionals behind FlexiStore's success
                    </p>

                    <div className="row justify-content-center">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="col-md-3 col-sm-6 mb-4">
                                <div
                                    className="p-4 shadow-sm rounded-4 h-100"
                                    style={{ backgroundColor: "#f9fafc" }}
                                >
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                                        style={{
                                            width: "80px",
                                            height: "80px",
                                            backgroundColor: "#ff9800",
                                            color: "white",
                                            fontSize: "24px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {member.initials}
                                    </div>
                                    <h5 className="fw-bold mb-1">{member.name}</h5>
                                    <p
                                        className="mb-2"
                                        style={{ color: "#f7931e", fontWeight: 500 }}
                                    >
                                        {member.role}
                                    </p>
                                    <p className="text-muted small">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
<TrustedBy/>
  <JoinSuccessSection />
           
           
          
          
            
           
            
        </div>

    )
}

export default AboutUs