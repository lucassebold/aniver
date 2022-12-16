import "./App.css";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import Main from "./Main";

function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const clock = document.querySelector(".clock");
    interval = setInterval(() => {
      const countDownDate = new Date("Dec 15,2022").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance <= 0) {
        // Stop Timer

        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
       // console.log(seconds)
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      {
        timerDays <= 0 && timerHours <= 0 && timerMinutes <= 0 && timerSeconds <= 0 ?
          <Main />
          :
          <Clock
            timerDays={timerDays}
            timerHours={timerHours}
            timerMinutes={timerMinutes}
            timerSeconds={timerSeconds}
          />
      }
    </div>
  );
}

export default App;
