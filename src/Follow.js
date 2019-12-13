import React from "react";
import { TwitterFollowButton } from "react-twitter-embed";
import "./styles.css";

const FollowButton = () => {
  return (
    <TwitterFollowButton
      screenName="cargill"
      options={{ size: "large", showCount: "false" }}
    />
  );
};

export default FollowButton;
