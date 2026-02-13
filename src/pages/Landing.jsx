import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Section_1 from "../components/Landing/Section_1";
import Section_1_flip from "../components/Landing/Section_1_flip";
import Section_2 from "../components/Landing/Section_2";
import Section_2_flip from "../components/Landing/Section_2_flip";
import JobPost from "../components/Landing/JobPost";

const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Section_1 />
      <Section_1_flip />
      <JobPost />
      <Section_2 />
      <Section_2_flip />

      {/* <section style={{ border: "1px solid #ccc" }}>
        <div style={{ display: "flex" }}>
          <div>
            <h2>Let the right people know you’re open to work</h2>
            <p>
              With the Open To Work feature, you can privately tell recruiters
              or publicly share with the LinkedIn community that you are looking
              for new job opportunities.
            </p>
          </div>
          <div>
            <img src="#" alt="Section Illustration" />
          </div>
        </div>
      </section> */}

      <section 
        className="flex justify-around border border-solid my-5 py-5"
      >
        <div>
          <img src="#" alt="image illustration" />
          <h2>Connect with people who can help</h2>
          <span>
            <a href="#">Find people you know</a>
          </span>
        </div>
        <div>
          <img src="#" alt="image illustration" />
          <h2>Learn the skills you need to succeed</h2>
          <span>
            <a href="#">Choose a topic to learn about</a>
          </span>
        </div>
      </section>

      <section
        style={{
          border: "1px solid #ccc",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <h2>Who is linkedIn for?</h2>
          <p>Anyone who navigate their professional life</p>
          <a href="#" style={{ display: "block" }}>
            Find a coworker or classmate
          </a>
          <a href="#" style={{ display: "block" }}>
            Find a new job
          </a>
          <a href="#" style={{ display: "block" }}>
            Find a course or training
          </a>
        </div>
        <div>
          <img src="#" alt="Image illustration" />
        </div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid #ccc",
        }}
      >
        <div>
          <video src="#"></video>
        </div>
        <div>
          <h2>In it to chase my dream</h2>
          <p>Check out Gayatri’s story of finding a new job on LinkedIn</p>
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        <h1>Join your colleagues, classmates, and friends on LinkedIn</h1>
        <a href="#" style={{ display: "block" }}>
          Get Started
        </a>
        <img src="#" alt="CTA Illustration" />
      </section>

      <footer style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <span>LOGO</span>
          <span>LinkedIn</span>
        </div>
        <div>
          <h3>General</h3>
          <ul>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Browse LinkedIn</h3>
          <ul>
            <li>
              <a href="#">Learning</a>
            </li>
            <li>
              <a href="#">Jobs</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Business Solution</h3>
          <ul>
            <li>
              <a href="#">Talent</a>
            </li>
            <li>
              <a href="#">Marketing</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Follow us</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Landing;
