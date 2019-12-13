import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Follow from "./Follow";
const Feed = ({
  height,
  feed,
  renderFollowButton,
  renderFooter,
  renderHeader
}) => {
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
          noFooter={!renderFooter ? "true" : ""}
          noHeader={!renderHeader ? "true" : ""}
        />
      </div>
      {renderFollowButton && (
        <div className="follow">
          <Follow />
        </div>
      )}
    </div>
  );
};

export default Feed;
