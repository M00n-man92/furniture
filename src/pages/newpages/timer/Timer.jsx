import React, { useEffect, useState } from 'react'
import "./timer.scss"
export default function Timer() {
  const countdown = new Date("Dec 21, 2022").getTime()
  const now = new Date().getTime()
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMin] = useState();
  const [sec, setSecs] = useState();

  const interval = () => {
    
    const timer = setInterval(() => {
      const difference = countdown - now;
      var p = Math.floor(difference / (1000 * 60 * 60 * 24))
      var d = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      var r = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      var f = Math.floor((difference % (1000 * 60)) / 1000)
      // document.getElementById("days").innerHTML = p;
      // document.getElementById("hours").innerHTML = d;
      // document.getElementById("mins").innerHTML = r;
      // document.getElementById("secs").innerHTML = f;

      // console.log(difference);
      if (difference < 0) {
        clearInterval()
        // console.l
      }
      else {
        setDays(p)
        setHours(d)
        setMin(r)
        setSecs(f)
        clearInterval(timer)
      }
    }, 1000)
    
  }
  useEffect(() => {
    interval();
  })
  return (

    <div className='timer'>
      <div className="first">
        <h3>
          Deal of The Day
        </h3>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper congue erosget tincidunt </span>
        <div className="countercontainer">
          <div className="individual">
            <h3 >
              {days}
            </h3>
            <span>
              Days
            </span>
          </div>
          <div className="individual">
            <h3 >{hours}</h3>
            <span>Hours</span>
          </div>
          <div className="individual">
            <h3 >{minutes}</h3>
            <span>Min</span>
          </div>
          <div className="individual">
            <h3 >{sec}</h3>
            <span>sec</span>
          </div>
        </div>
        <button>SHOP NOW</button>
      </div>
      <div className="second">
        <img src="./assets/Gojjam Amhara.jfif" alt="" />
      </div>
    </div>
  )
}
