 import React from "react";
 import ReactDOM from "react-dom";
// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);
// Manipulate the HTML DOM using React
// Create nested React Elements
/* const heading = React.createElement(
    "h1",          
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title"
    },
    "heading"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "heading1"
  );
  
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1]
  );
   */
  // create root using createRoot
  //const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  const parent=React.createElement("div",{id: "parent"},[
    React.createElement("div",{id:"child"},[
      React.createElement("h1",{},"i'm an h1 tag"),
      React.createElement("h2",{},"i'm  an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
      React.createElement("h1",{},"i'm an h1 tag"),
      React.createElement("h2",{},"i'm an h2 tag"),
    ]),
  ]);
  console.log(parent); //object
  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);