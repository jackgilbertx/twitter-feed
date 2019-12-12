import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Follow from "./Follow";
const Feed = ({ height, feed }) => {
  return (
    <div className="container">
      <div style={{ height: `${height}px` }}>
        <TwitterTimelineEmbed
          borderColor="#658D1B"
          linkColor="#658D1B" // not working
          autoHeight
          theme="light"
          lang="en"
          sourceType="profile"
          screenName={feed}
          // noFooter
          // noHeader
        />
      </div>
      <Follow />
    </div>
  );
};

export default Feed;
