import React from "react";
import TwitterFeed from "./TwitterFeed";

import "./styles.css";
const App = () => {
  const props = {
    height: "300",
    feed: "cargill", //twitter handle (cargill, foodsecureworld etc)
    renderFollowButton: true,
    renderHeader: false
  };

  return (
    <div style={{ width: "200px" }}>
      <TwitterFeed {...props} />
    </div>
  );
};
export default App;

// make container in actual component.  Pass in height but only to feed with minimum of 200px;
