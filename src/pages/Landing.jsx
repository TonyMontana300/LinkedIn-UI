import React from "react";

const Landing = () => {
  return (
    <>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <span>LOGO</span>
        <ul
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            listStyle: "none",
          }}
        >
          <li>Top Content</li>
          <li>People</li>
          <li>Learning</li>
          <li>Jobs</li>
          <li>Games</li>
          <li>Get the app</li>
        </ul>
        <div>
          <a href="#">Join Now</a>
          <a href="#">Login</a>
        </div>
      </nav>

      <main
        className="Hero"
        style={{
          minHeight: "89vh",
          border: "1px solid #ccc",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
            <h1>Welcome to your professional network</h1>
            <a href="#" style={{ display: "block", padding: "10px" }}>
              Continue with Google
            </a>
            <a href="#" style={{ display: "block", padding: "10px" }}>
              Continue with others
            </a>
            <a href="#" style={{ display: "block", padding: "10px" }}>
              Sign in with email
            </a>
            <p>
              By clicking Continue to join or sign in, you agree to LinkedIn’s
              User Agreement, Privacy Policy, and Cookie Policy.
            </p>
            <p>
              New to LinkedIn? <a href="#">Join now</a>
            </p>
          </div>
          <div>
            <img src="#" alt="Hero Illustration" />
          </div>
        </div>
      </main>

      <section>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>Explore top LinkedIn content</h2>
            <p>
              Discover relevant posts and expert insights — curated by topic and
              in one place.
            </p>
          </div>
          <div>
            <span>
              <a href="#">Career</a>
            </span>
            <span>
              <a href="#">Productivity</a>
            </span>
            <span>
              <a href="#">Finance</a>
            </span>
            <span>
              <a href="#">Soft Skills and Emotional Intelligence</a>
            </span>
            <span>
              <a href="#">Project Management</a>
            </span>
            <span>
              <a href="#">Education</a>
            </span>
            <span>
              <a href="#">Technology</a>
            </span>
            <span>
              <a href="#">Leadership</a>
            </span>
            <span>
              <a href="#">E-Commerce</a>
            </span>
            <span>
              <a href="#">Show all</a>
            </span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span>
              <a href="#">Engineering</a>
            </span>
            <span>
              <a href="#">Business Development</a>
            </span>
            <span>
              <a href="#">Finance</a>
            </span>
            <span>
              <a href="#">Administrative Assistant</a>
            </span>
            <span>
              <a href="#">Retail Associate</a>
            </span>
            <span>
              <a href="#">Customer Service</a>
            </span>
            <span>
              <a href="#">Operations</a>
            </span>
            <span>
              <a href="#">Information Technology</a>
            </span>
            <span>
              <a href="#">Marketing</a>
            </span>
            <span>
              <a href="#">Human Resources</a>
            </span>
            <span>
              <a href="#">Show all</a>
            </span>
          </div>
          <div>
            <h2>Find the right job or internship for you</h2>
          </div>
        </div>
      </section>

      <section
        style={{
          textAlign: "center",
          padding: "20px",
          border: "1px solid #ccc",
        }}
      >
        <h2>Post your job for millions of people to see</h2>
        <button>Post a job</button>
      </section>

      <section>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2>Discover the best software tools</h2>
            <p>
              Connect with buyers who have first-hand experience to find the
              best products for you.
            </p>
          </div>
          <div>
            <span>
              <a href="#">E-Commerce Platforms</a>
            </span>
            <span>
              <a href="#">CRM Software</a>
            </span>
            <span>
              <a href="#">Human Resource Management System</a>
            </span>
            <span>
              <a href="#">Recruiting Software</a>
            </span>
            <span>
              <a href="#">Sales Intelligent Software</a>
            </span>
            <span>
              <a href="#">Project Management Software</a>
            </span>
            <span>
              <a href="#">Help Dest Software</a>
            </span>
            <span>
              <a href="#">Social Networking Software</a>
            </span>
            <span>
              <a href="#">Desktop Publishing Software</a>
            </span>
            <span>
              <a href="#">Show all</a>
            </span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span>
              <a href="#">Zip</a>
            </span>
            <span>
              <a href="#">Mini Sudoku</a>
            </span>
            <span>
              <a href="#">Queens</a>
            </span>
            <span>
              <a href="#">Tango</a>
            </span>
            <span>
              <a href="#">Pinpoint</a>
            </span>
            <span>
              <a href="#">Cross Climb</a>
            </span>
            <span>
              <a href="#">Operations</a>
            </span>
          </div>
          <div>
            <h2>Keep your mind sharp with games</h2>
            <p>
              Take a break and reconnect with your network through quick daily
              games.
            </p>
          </div>
        </div>
      </section>

      <section style={{ border: "1px solid #ccc" }}>
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
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid #ccc",
        }}
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

      <section style={{ display: "flex", justifyContent: "space-around", border: "1px solid #ccc"}}>
        <div>
          <video src="#"></video>
        </div>
        <div>
          <h2>In it to chase my dream</h2>
          <p>Check out Gayatri’s story of finding a new job on LinkedIn</p>
        </div>
      </section>

      <section style={{ textAlign: "center", padding: "20px", border: "1px solid #ccc"}}>
        <h1>Join your colleagues, classmates, and friends on LinkedIn</h1>
        <a href="#" style={{display: "block"}}>Get Started</a>
        <img src="#" alt="CTA Illustration" />
      </section>

      <footer style={{display: "flex", justifyContent: "space-around"}}>
        <div>
          <span>LOGO</span>
          <span>LinkedIn</span>
        </div>
        <div>
          <h3>General</h3>
          <ul>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div>
          <h3>Browse LinkedIn</h3>
          <ul>
            <li><a href="#">Learning</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div>
          <h3>Business Solution</h3>
          <ul>
            <li><a href="#">Talent</a></li>
            <li><a href="#">Marketing</a></li>
            <li><a href="#">Sales</a></li>
          </ul>
        </div>
        <div>
          <h3>Follow us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Landing;
