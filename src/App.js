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

  // References to DOM Elements
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const book = document.getElementById("book");

  const paper1 = document.getElementById("p1");
  const paper2 = document.getElementById("p2");
  const paper3 = document.getElementById("p3");

  // Event Listener
  // prevBtn.addEventListener("click", goPrevPage);
  // nextBtn.addEventListener("click", goNextPage);

  // Business Logic
  let currentLocation = 1;
  let numOfPapers = 3;
  let maxLocation = numOfPapers + 1;

  const openBook = () => {
    if (book && prevBtn && nextBtn) {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-180px)";
      nextBtn.style.transform = "translateX(180px)";
    }
  }

  const closeBook = (isAtBeginning) => {
    if (book && prevBtn && nextBtn) {
      if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
      } else {
        book.style.transform = "translateX(100%)";
      }

      prevBtn.style.transform = "translateX(0px)";
      nextBtn.style.transform = "translateX(0px)";
    }
  }

  const goNextPage = () => {
    console.log('teste')
    if (paper1 && paper2 && paper3) {
      if (currentLocation < maxLocation) {
        switch (currentLocation) {
          case 1:
            openBook();
            paper1.classList.add("flipped");
            paper1.style.zIndex = 1;
            break;
          case 2:
            paper2.classList.add("flipped");
            paper2.style.zIndex = 2;
            break;
          case 3:
            paper3.classList.add("flipped");
            paper3.style.zIndex = 3;
            closeBook(false);
            break;
          default:
            throw new Error("unkown state");
        }
      }
      currentLocation++;
    }
  }

  const goPrevPage = () => {
    console.log('teste2')
    if (paper1 && paper2 && paper3) {
      if (currentLocation > 1) {
        switch (currentLocation) {
          case 2:
            closeBook(true);
            paper1.classList.remove("flipped");
            paper1.style.zIndex = 3;
            break;
          case 3:
            paper2.classList.remove("flipped");
            paper2.style.zIndex = 2;
            break;
          case 4:
            openBook();
            paper3.classList.remove("flipped");
            paper3.style.zIndex = 1;
            break;
          default:
            throw new Error("unkown state");
        }
      }
      currentLocation--;
    }
  }

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"></link>
      <button style={{ zIndex: '10', position: 'absolute', top: '10px' }} onClick={() => window.location.reload(false)}>Recarregar</button>
      {
        timerDays <= 0 && timerHours <= 0 && timerMinutes <= 0 && timerSeconds <= 0 ?
          <Main goPrevPage={goPrevPage} goNextPage={goNextPage} />
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
