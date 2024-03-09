import React from "react";

import "./plan.css";

const Plan = () => {
  return (
    <section className="plan">
      <div className="plan-content">
        <div className="plan-text">
          <h1>Choose Your Best Plan</h1>
          <p>Choose the plan that suits you.</p>
        </div>
        <div className="plan-box">
          <div className="plan-heading">
            <h1>STARTER FITNESS PLAN</h1>
            <span>Basic Plan</span>
          </div>
          <div className="plan-description">
            <p>● Gym Access</p>
            <p>● Basic Classes</p>
            <p>● Monthly Progress Check</p>
          </div>
          <div className="border-bottom"></div>
          <div className="plan-heading-active">
            <h1>BEGINNER FITNESS PLAN</h1>
            <div className="price-circle">
               <p>START FROM</p>
               <h2>$120</h2>
               <p>MONTH</p>
            </div>
            <span>Recommended Plan</span>
          </div>
          <div className="plan-description-active">
            <p>● Starter pack included</p>
            <p>● Group Fitness</p>
            <p>● Discounts</p>
          </div>
          <div className="border-bottom"></div>
          <div className="plan-heading">
            <h1>ADVANCED FITNESS PLAN</h1>
            <span>Pro Plan</span>
          </div>
          <div className="plan-description">
            <p>● Starter & Beginner pack included</p>
            <p>● Unlimited Classes</p>
            <p>● Buddy Pass</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;
