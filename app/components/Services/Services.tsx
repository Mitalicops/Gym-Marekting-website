import React from "react";

import "./services.css";
import Image from "next/image";

const Services = () => {
  return (
    <section className="services">
      <div className="services-center-text">
        <h1>Top Tier Services We Offer To You</h1>

        <p>
          We have a wide range of services bundled into six (6) sections here.
          You're the VIP here. Pick your course and run with it, if you need any
          assistance with selecting, reach out to us and lets talk. We're here
          for you.
        </p>
      </div>

      <div className="services-content">
        <div className="services-text">
          <div className="services-heading">
            <span>01</span>
            <h1>Track Body Activity</h1>
          </div>
          <div className="services-description">
            <p>
              View The results of ypur sports activity tracker in real time from
              your admin dashboard or app
            </p>
          </div>
          <div className="services-heading">
            <span>02</span>
            <h1>Free Workout videos</h1>
          </div>
          <div className="services-description">
            <p>
              Enjoy a wide variety of sports for free to your hearts content on
              our mobile app.
            </p>
          </div>
          <div className="services-heading">
            <span>03</span>
            <h1>Personal Workout sessions</h1>
          </div>
          <div className="services-description">
            <p>
              You can have personal workout session with our top award winning
              gym trainers when you get your pro memebership
            </p>
          </div>
          <div className="services-heading">
            <span>04</span>
            <h1>Personal Training</h1>
          </div>
          <div className="services-description">
            <p>
              Tailored one-on-one fitness sessions with certified trainers to
              help memebers set and achieve their specific fitness goals.
            </p>
          </div>
          <div className="services-heading">
            <span>05</span>
            <h1>Nutritional Counseling</h1>
          </div>
          <div className="services-description">
            <p>
              Perosonalized nutrition guidance and meal planning to complement
              members workouts and promote overall health.
            </p>
          </div>
        </div>

        <div className="services-img">
          <Image
            src="/images/services-img.jpg"
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
