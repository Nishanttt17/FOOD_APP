//ading react elements into react components
import React from "react";
import ReactDOM from "react-dom";
const title=(
    <h1 classname="head" tabindex="5">
        Namaste react using JSX
    </h1>
);
const Headingcomponent=()=>(
    <div id="container">
    {title}
        <h1 classname="heading">namaste react functional component</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);