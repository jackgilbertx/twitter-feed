import React from "react";
import Twitter from "./Twitter.js";
import Follow from "./Follow";
import "./styles.css";
const App = () => {
  return (
    <div className="container">
      <div className="feed" style={{ width: "200px", height: "200px" }}>
        <Twitter />
      </div>
      <Follow />
    </div>
  );
};
export default App;

// make container in actual component.  Pass in height but only to feed with minimum of 200px;
