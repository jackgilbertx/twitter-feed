import React from "react";
import Feed from "./Feed";

import "./styles.css";
const App = () => {
  return (
    <div style={{ width: "100px" }}>
      <Feed height="200" feed="cargill" />
    </div>
  );
};
export default App;

// make container in actual component.  Pass in height but only to feed with minimum of 200px;
