import React from "react";

const ProfileLayout = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        gap: "20px",
        margin: "20px auto",
        maxWidth: "1200px",
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <div style={{ border: "1px solid lightgray" }}>
        <div>
          <h1>Profile Name</h1>
          <p>Profile Description</p>
          <p>Location</p>
          <ul>
            <li>Open to Add profile section Add custom button Resources</li>
          </ul>
          <div>
            <p>Open to work</p>
            <p>Web Developers Roles</p>
            <a href="#">Show Details</a>
          </div>
        </div>

        <div>
          <h2>Analytics</h2>
          <p>Private to you</p>
          <ul style={{ display: "flex" }}>
            <li>
              4 profile views 4 profile views Discover who's viewed your
              profile.
            </li>
            <li>
              5 post impressions 5 post impressions Check out who's engaging
              with your posts.Check out who's engaging with your posts. Past 7
              daysPast 7 days
            </li>
            <li>
              5 search appearances 5 search appearances See how often you appear
              in search results.
            </li>
          </ul>
          <button>Show all Analytics</button>
        </div>

        <div>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
            sunt cupiditate praesentium sapiente minus est dolores corrupti.
            Consequuntur recusandae vitae nulla unde, incidunt similique earum!
            Id molestias itaque ipsa reiciendis deserunt consectetur aut
            facilis!
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

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h2>Activity</h2>
              <span>82 followers</span>
              <div style={{ display: "flex", gap: "5px" }}>
                <span>Posts</span>
                <span>Comments</span>
              </div>
            </div>
            <div>
              <button>Create a post</button>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
          <div>Card</div>
        </div>
        <button>Show all posts/comments</button>

        <div>
          <h2>Experience</h2>
          <ul>
            <li>Cards</li>
            <li>Cards</li>
          </ul>
        </div>

        <div>
          <h2>Education</h2>
          <ul>
            <li>Cards</li>
            <li>Cards</li>
          </ul>
        </div>

        <div>
          <h2>Licenses & certifications</h2>
          <ul>
            <li>Cards</li>
            <li>Cards</li>
          </ul>
        </div>

        <div>
          <h2>Projects</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
            alias vero fuga error earum quae dolorem obcaecati asperiores rem
            dolore, placeat natus ipsam excepturi beatae quos quaerat harum ex
            consectetur?
          </p>
        </div>

        <div>
          <h2>Skills</h2>
          <ul>
            <li>skills</li>
            <li>skills</li>
            <li>skills</li>
          </ul>
          <button>Show all skills</button>
        </div>

        <div>
          <h2>Interest</h2>
          <ul>
            <li>Companies Newsletters Schools</li>
          </ul>
          <div>Cards</div>
          <div>Cards</div>
          <button>Show all companies</button>
        </div>
      </div>

      <div style={{ border: "1px solid lightgray" }}>
        <div>
            <p>Profile Language</p>
            <p>URL</p>
        </div>

        <div>
            <h2>Advertisement</h2>
            <a href="#">Redeem Offers</a>
        </div>

        <div>
            <h2>People Also Viewed</h2>
            <span>Private to you</span>
            <ul>
                <li>User</li>
                <li>User</li>
                <li>User</li>
                <li>User</li>
                <li>User</li>
            </ul>
        </div>

        <div>
            <h2>People you may know</h2>
            <span>From your industry</span>
            <ul>
                <li>User</li>
                <li>User</li>
                <li>User</li>
                <li>User</li>
                <li>User</li>
            </ul>
            <button>Show all</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
