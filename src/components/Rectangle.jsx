import React, { useState } from "react";

function Rectangle() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


  const [color, setColor] = useState("black")
  const [timerSec, setTimerSec] = useState(0);




  const randomColor = () => {
    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);
    return `rgb(${red},${green},${blue})`
  };

  const changeColor = () =>{

    setTimerSec(
        setInterval(()=>{
            setColor(randomColor())
            
        },1000)
    )
  };


  const stopTimer = () =>{
    clearInterval(timerSec)
  };

  const mouseOut = () => {
    clearInterval(timerSec);
  }



  return (
    <div
      style={{
        width:"250px",
        height:"250px",
        margin:"auto",
        backgroundColor:`${color}`
      }}
      onMouseOver={changeColor}
      onMouseLeave={mouseOut}
      onDoubleClick={stopTimer}

    ></div>
  );
}

export default Rectangle;
