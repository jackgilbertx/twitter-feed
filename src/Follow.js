import React from "react";
import { TwitterFollowButton } from "react-twitter-embed";
import "./styles.css";

const Follow = () => {
  return (
    <div className="follow">
      <TwitterFollowButton
        screenName="cargill"
        options={{ size: "large", showCount: "false" }}
      />
    </div>
  );
};

export default Follow;
