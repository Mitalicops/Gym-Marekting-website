import Image from "next/image";
import React from "react";

import "./hero.css";
import { IoMdPlayCircle } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              REGISTER, BUILD & GROW WITH <span>Oxion</span>
            </h1>
            <p>
              We are not just a fitness center;we're a community of passionate
              individuals dedicated transforming lives through helth and
              wellness
            </p>
          </div>

          <div className="hero-img">
            <Image
              src="/images/hero-img.jpg"
              alt="hero"
              width={500}
              height={500}
            />

            <a href="#" className="btn-3">
              Get a Membership <GoArrowUpRight color="#fff" size={26} />
            </a>
          </div>
        </div>

        <div className="hero-2">
          <div className="hero-2-img">
            <Image
              src="/images/hero-2.jpg"
              alt="hero"
              width={500}
              height={500}
            />
            <div className="hero-2-btn">
              <a href="#" className="btn-1">
                Play Video <IoMdPlayCircle color="cff087" size={26} />
              </a>
              <a href="#" className="btn-2">
                Purchase Equipment <GoArrowUpRight color="#fff" size={26} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
