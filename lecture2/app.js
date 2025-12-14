import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div",{id:"heading"},[React.createElement("h1",{id:"heading1", key:1},"Hello i am heading1!"), React.createElement("h1",{id:"heading1",key:2},"Hello i am heading2!")]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)