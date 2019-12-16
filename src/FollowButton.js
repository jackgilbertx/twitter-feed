import React from "react";
// import { TwitterFollowButton } from "react-twitter-embed";
import "./styles.css";

const FollowButton = ({ renderFollowButton }) => {
  // const language = window.navigator.language;

  return (
    <div>
      {renderFollowButton && (
        <div className="follow">
          {/* <TwitterFollowButton
            screenName="cargill"
            options={{ lang: language, showCount: "false", size: "large" }}
          /> */}
          <button
            type="button"
            class="btnColor"
            onClick={() => window.open("https://www.google.com")}
          >
            <img src="Twitter_Logo.png" alt="pic" />
            Follow Us
          </button>
        </div>
      )}
    </div>
  );
};

export default FollowButton;
