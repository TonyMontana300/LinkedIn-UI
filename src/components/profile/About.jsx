import React from "react";

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, sunt
        cupiditate praesentium sapiente minus est dolores corrupti. Consequuntur
        recusandae vitae nulla unde, incidunt similique earum! Id molestias
        itaque ipsa reiciendis deserunt consectetur aut facilis!
      </p>
      <div>
        <p>Top skills</p>
        <ul
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <li>
            Web Development • HTML5 • JavaScript • Tailwind CSS • Express.js
          </li>
          <li>Open skills</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
