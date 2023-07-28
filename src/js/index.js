//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/simpleCounter.css";

//import your own components
import Home from "./component/home.jsx";



//render your react application


                        //milliseconds for every second
//setInterval (function(), 1000)

    ReactDOM.render(<Home />, document.querySelector("#app"));
 
