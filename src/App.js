import React from "react";
import TwitterFeed from "./TwitterFeed";

const App = () => {
  const props = {
    height: "200",
    feed: "cargill", //twitter handle (cargill, foodsecureworld etc)
    renderFollowButton: true,
    renderHeader: false
  };

  return (
    <div>
      <div style={{ width: "200px" }}>
        <TwitterFeed {...props} />
      </div>
      <div className="pic" />
    </div>
  );
};
export default App;

// make container in actual component.  Pass in height but only to feed with minimum of 200px;
