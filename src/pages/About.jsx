import React from "react";
import "../styles/about.css";
import { teamMembers } from "../constants/teamMembers";
const About = () => {
  const defaultImage =
    "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

  return (
    <div className="page-container about-container">
      <h1>ABOUT</h1>
      <h3 className="team-subheading">Team Members</h3>
      <div className="team-members-container">
        {teamMembers.map((member, index) => {
          return (
            <div className="team-member" key={index}>
              <img
                className="member-picture"
                src={member.image ? member.image : defaultImage}
                alt={member.name}
              />
              <h4>{member.name}</h4>
              <p>{member.info}</p>
            </div>
          );
        })}
      </div>
      <h4>Goal</h4>
      <div>
        <h4>Methodology: </h4>
      </div>
      <div>
        <h4>Data Sources: </h4>
      </div>
      <div>
        <h4>Acknowledgements: </h4>
      </div>
    </div>
  );
};

export default About;