import Image from "next/image";
import React from "react";

import "./resources.css";
import { PiArrowUpRightThin } from "react-icons/pi";

const Resources = () => {
  return (
    <section className="resources">
      <div className="resources-content">
        <div className="resources-img">
          <Image
            src="/images/resources-img.jpg"
            alt="image"
            width={500}
            height={500}
          />
        </div>
        <div className="resources-text">
          <h1>FREEBIES!!!</h1>
          <p>
            At <span>OXION</span>, we believe in making fitness accessible to
            everyone, and that starts with offering you a range of incredible
            FREE resources to kickstart your wellness journey!
          </p>
          <div className="resources-container">
            <div className="resources-box">
              <h2>Nutrition eBook</h2>
              <PiArrowUpRightThin className="arrow" />
            </div>
            <div className="resources-box">
              <h2>Free Trial Pass</h2>
              <PiArrowUpRightThin className="arrow" />
            </div>
            <div className="resources-box">
              <h2>Educational Workshops</h2>
              <PiArrowUpRightThin className="arrow" />
            </div>
            <div className="resources-box">
              <h2>Personalized Fitness Assessment</h2>
              <PiArrowUpRightThin className="arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
