import React, { Fragment } from "react";
import styled from "styled-components";
import Main from "./Main";

const Clocks = styled.div`
.clock {
    position: relative;
    margin: a;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFBF00;
    height: 180px;
    width: 360px;
    color: #fff;
    text-shadow: 1px 1px 7px;
    border-radius: 15px;
    border: 2px solid silver;
    box-shadow: 0 0 5px 25px;
  }
  .clock section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .clock section p {
    font-size: 4rem;
  }
  .clock section small {
    color: #fff;
    text-shadow: none;
  }
`;

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {

    return (
        <Clocks>
            <section className="timer-container">
                <section className="timer">
                    <div className="clock">
                        <section>
                            <p>{timerDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <small>Hours</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <small>Minutes</small>
                        </section>{" "}
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
        </Clocks>
    );
};

Clock.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Clock;