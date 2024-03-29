import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
const Timeline = ({ height, feed, renderHeader }) => {
  const language = window.navigator.language;
  return (
    <div className="timeline" style={{ height: `${height}px` }}>
      <TwitterTimelineEmbed
        borderColor="#fff"
        autoHeight
        theme="light"
        lang={language}
        sourceType="profile"
        screenName={feed}
        noHeader={!renderHeader ? "true" : ""}
        noFooter
        transparent
      />
    </div>
  );
};

export default Timeline;
