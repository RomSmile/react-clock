import React, { useEffect, useState } from "react";
import './styles/style.scss';
//sec - 6deg
//minute - 6deg
//hour - 30deg

export const App = () => {
  const [ time, setTime ] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    const interval = 
      window.setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [ time ])

  const hours = time.split(':')[0];
  const minute = time.split(':')[1];
  const second = time.split(':')[2].slice(0,2);
  const minuteDeg = minute * 6;
  const secondDeg = second * 6;

  return (
    <div className="body">
      <div className="clock">
        <div className="center" />
        <div className="clock-stick-hour" style={{transform: `rotate(${hours > 12 ? (hours - 12) * 30 : hours * 30}deg)`}}/>
        <div className="clock-stick-minutes" style={{transform: `rotate(${minuteDeg}deg)`}}/>
        <div className="clock-stick-second" style={{transform: `rotate(${secondDeg}deg)`}}/>
      </div>
    </div>
  );
}

export default App;
