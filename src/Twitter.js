import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";

const Twitter = () => {
  return (
    <div className="twitterContainer">
      <div className="feed">
        <TwitterTimelineEmbed
          borderColor="#658D1B"
          linkColor="#658D1B" // not working
          autoHeight
          lang="en"
          sourceType="profile"
          screenName="cargill"
          noFooter
          noHeader
        />
      </div>
      <div className="follow">
        <TwitterFollowButton
          screenName="cargill"
          options={{ size: "large", showCount: "false" }}
        />
      </div>
    </div>
  );
};

export default Twitter;
