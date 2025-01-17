//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";



function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  const homeFieldGoal = e => setHomeScore(homeScore + 3);
  const homeTouchdown = e => setHomeScore(homeScore + 7);
  const awayFieldGoal = e => setAwayScore(awayScore + 3);
  const awayTouchdown = e => setAwayScore(awayScore + 7);

  // const Timer = (props) => {
  //   const [time, setTime] = useState(new Date().toLocaleTimeString());
  //   const secondsPassed = useRef(0);
  
  //   useEffect(() => {
  //     const timeout = setTimeout(() => {
  //       const date = new Date()
  //       secondsPassed.current = secondsPassed.current + 1;
  //       setTime(date.toLocaleTimeString());
  //     }, 1000);
  //     return () => {
  //       clearTimeout(timeout);
  //     }
  //   }, [time]);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">0:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
