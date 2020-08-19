import React from "react";

import loading from "../images/gif/loading-gear.gif";

const Loading = () => (
  <div className="loading">
    <p>Loading Rooms Data...</p>
    <img src={loading} alt="loading roomd data" />
  </div>
);

export default Loading;
