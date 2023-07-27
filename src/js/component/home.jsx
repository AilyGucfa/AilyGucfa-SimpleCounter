import React from "react";
import PropTypes from "prop-types";
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "../libTime";
//create your first component
const Home = ({counter}) => {

	return (
		<>
			<SimpleCounter
			hundredThousandsDigit={calculateSeconds(counter, 100000)}
			tenThousandsDigit={calculateSeconds(counter, 10000)}
			thousandsDigit={calculateSeconds(counter, 1000)} 
			hundredsDigit={calculateSeconds(counter, 100)}
			tensDigit={calculateSeconds(counter, 10)}
			onesDigit={calculateSeconds(counter, 1)}
			
			/>
			
		
		</>
	);
};

Home.prototypes = {
	counter: PropTypes.number
}

export default Home;
/*
			h
			
			
			 */