import React from "react";
import { TwitterFollowButton } from "react-twitter-embed";
import "./styles.css";

const Follow = () => {
  return (
    // <button
    //   style={{
    //     width: "100%",
    //     height: "30px",
    //     backgroundColor: "skyblue",
    //     borderRadius: "5px",
    //     color: "white",
    //     fontStyle: "bold",
    //     fontSize: "1.08em"
    //   }}
    // >
    //   Follow us @cargill
    // </button>

    <TwitterFollowButton
      screenName="cargill"
      options={{ size: "large", showCount: "false" }}
    />
  );
};

export default Follow;
