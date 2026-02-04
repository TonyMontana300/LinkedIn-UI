import React from "react";

const MessagePanel = () => {
  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "10px" }}
    >
      <div>
        <h2>Section Header</h2>
        <input type="text" />
        <ul>
          <li>Focused Jobs Unread Connections InMail Starred</li>
        </ul>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "10px",
            height: "400px",
            borderTop: "1px solid gray",
            marginTop: "10px",
            paddingTop: "10px",
          }}
        >
          <div>
            <ul>
              <li>Contact 1</li>
              <li>Contact 2</li>
              <li>Contact 3</li>
            </ul>
          </div>
          <div>
            <h3>Messenger Name</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur, commodi. Illum repellat possimus eveniet animi modi
              ducimus unde aliquid sunt ullam dolor fugiat vero, natus inventore
              dolorem autem pariatur, obcaecati architecto assumenda fuga atque.
            </p>
            <div>
              <input type="text" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Advertisement</p>
        <a href="#">Redeem Offer</a>
      </div>
    </div>
  );
};

export default MessagePanel;
