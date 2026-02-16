import React from "react";
import { useRef } from "react";
import Navbar from "../components/Landing/Navbar";
import Hero from "../components/Landing/Hero";
import Section_1 from "../components/Landing/Section_1";
import Section_1_flip from "../components/Landing/Section_1_flip";
import Section_2 from "../components/Landing/Section_2";
import Section_2_flip from "../components/Landing/Section_2_flip";
import JobPost from "../components/Landing/JobPost";
import ImageContent from "../components/Landing/ImageContent";
import Section_3 from "../components/Landing/Section_3";
import CTA from "../components/Landing/CTA";
import Footer from "../components/Landing/Footer";
import AuthFooter from "../components/login-signup/AuthFooter";


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

      <ImageContent />
      <Section_3 />

      {/* <section
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
      </section> */}

      <CTA />
      <Footer />
      <AuthFooter />

    </>
  );
};

export default Landing;
