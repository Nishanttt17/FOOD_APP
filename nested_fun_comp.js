import React from "react";
import ReactDOM from "react-dom/client";
const Title=()=>(
    <h1 classname="head" tabIndex="5">
        Namaste react by akshay saini
    </h1>
);
//component composition
const Headingcomponent=()=>(
    <div id="container">
        {Title()}
        <Title></Title>
        <Title/>
        <h1 classname="heading">namaste react functional component</h1>
    </div>
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headingcomponent/>);