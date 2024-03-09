import React from "react";

import "./about.css";
import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { GiMuscleUp } from "react-icons/gi";
import { FaCodeBranch } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h1>Join us on a journey To discover Your True potential</h1>

        <p>
          Welcome to place where fitnes meets inspiration, and every step you
          take brings you closer to a healthier, happy you!.
        </p>
      </div>
      <div className="about-content">
        <div className="about-box">
          <CiUser className="icon" />
          <h2>200+</h2>
          <h3>Trainers</h3>
          <p>Professional coach</p>
        </div>

        <div className="about-box">
          <GiMuscleUp className="icon" />

          <h2>420+</h2>
          <h3>Workout Sessions</h3>
          <p>Online & Physical</p>
        </div>

        <div className="about-box">
          <FaCodeBranch className="icon" />
          <h2>120</h2>
          <h3>Branches</h3>
          <p>Worldwide</p>
        </div>

        <div className="about-box">
          <GoTrophy className="icon" />
          <h2>42</h2>
          <h3>Awards</h3>
          <p>And Countin!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
