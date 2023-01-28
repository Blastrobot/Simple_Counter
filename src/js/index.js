//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(() => {
    let four = Math.floor(counter/86400);
    let three = Math.floor(counter/3600);
    let two = Math.floor(counter/60);
    let one = Math.floor(counter/1);
    console.log(four, three, two, one);
    ReactDOM.render(<Home secsNumber={one} minsNumber={two} hoursNumber={three} daysNumber={four} />, document.querySelector("#app"));
    counter ++;
}, 1000);
