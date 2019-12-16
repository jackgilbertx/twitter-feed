import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import FollowButton from "./Follow";
const Feed = ({ height, feed, renderFollowButton, renderHeader }) => {
  return (
    <div className="container">
      <div className="timeline" style={{ height: `${height}px` }}>
        <TwitterTimelineEmbed
          borderColor="#fff"
          linkColor="#658D1B" // not working
          autoHeight
          theme="light"
          lang="en"
          sourceType="profile"
          screenName={feed}
          noHeader={!renderHeader ? "true" : ""}
        />
      </div>
      {renderFollowButton && (
        <div className="follow">
          <FollowButton />
        </div>
      )}
    </div>
  );
};

export default Feed;
