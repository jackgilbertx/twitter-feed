import React from "react";
import Timeline from "./Timeline";
import FollowButton from "./FollowButton";

const TwitterFeed = ({ height, feed, renderFollowButton, renderHeader }) => (
  <div className="container">
    <Timeline height={height} feed={feed} renderHeader={renderHeader} />
    <FollowButton renderFollowButton={renderFollowButton} />
  </div>
);

export default TwitterFeed;
