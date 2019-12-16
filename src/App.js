import React from "react";
import Feed from "./Feed";

import "./styles.css";
const App = () => {
  const props = {
    height: "400",
    feed: "cargill", //twitter handle (cargill, foodsecureworld etc)
    renderFollowButton: true,
    renderHeader: true
  };

  return (
    <div style={{ width: "200px" }}>
      <Feed {...props} />
    </div>
  );
};
export default App;

// make container in actual component.  Pass in height but only to feed with minimum of 200px;
