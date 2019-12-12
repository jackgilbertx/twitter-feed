import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";

const Twitter = () => {
  return (
    <TwitterTimelineEmbed
      borderColor="#658D1B"
      linkColor="#658D1B" // not working
      autoHeight
      theme="light"
      lang="en"
      sourceType="profile"
      screenName="cargill"
      // noFooter
      // noHeader
    />
  );
};

export default Twitter;
