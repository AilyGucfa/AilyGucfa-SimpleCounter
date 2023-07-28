import React, { useState, useEffect } from 'react';
import SimpleCounter from './simpleCounter';
import calculateSeconds from '../../lib/libTime';

const Timer = () => {
  const initialTime = 0; // Initial time in seconds
  const [time, setTime] = useState(initialTime);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (timerRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000); // Update time every 1 second
    } else {
      clearInterval(interval); // Clear the interval when the timer is stopped
    }

    return () => clearInterval(interval);
  }, [timerRunning]);

  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setTimerRunning(false);
  };

  return (

    <>
    <div>
        <SimpleCounter
			    hundredThousandsDigit={calculateSeconds(time, 100000)}
			    tenThousandsDigit={calculateSeconds(time, 10000)}
			    thousandsDigit={calculateSeconds(time, 1000)} 
			    hundredsDigit={calculateSeconds(time, 100)}
			    tensDigit={calculateSeconds(time, 10)}
			    onesDigit={calculateSeconds(time, 1)}    
          
			  />
         </div>
        <div className='btn'>
          <button class="btn mb-1 ms-2 pt-2 fas fa-play " id='startButton' onClick={startTimer}></button>
          <button className='btn fas fa-stop mb-1 ms-2 pt-2' onClick={stopTimer}></button>
          <button className='btn fas fa-sync-alt mb-1 pt-2 ms-2' onClick={resetTimer}></button>
        </div>
          
    </>
  );
};

export default Timer;
