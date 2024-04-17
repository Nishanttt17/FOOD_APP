import React from "react";
import ReactDOM from "react-dom/client";

// what is a react element ?
//react.createElement => is an object
// when we render this into the DOM then it becomes an html element
// and push into the browser
//react.createElement=>reactElement-JS(object)=>HTMLelement(render)
const heading=React.createElement("h1",{id:"heading"},"Nmaste react");
console.log(heading);

//JSX React
//jsx (transpiled before it reaches the js)-parcel -babel
//jsx=>React.createElement=>reactelement-Js object=>html element(render)

const jsxheading=(
<h1 classname="head" tabIndex="5">
Namaste react by nishant shaw
</h1>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);

//react component
//classbased components: OLD
//and functional components: NEW

//react functional component
//a js function that return a react element
const HeadingComponent1=()=> <h1>Namaste react functional components</h1>
const HeadingComponent2=()=> {
return <h1>Namaste react functional components</h1>
};
root.render(<HeadingComponent1/>);
