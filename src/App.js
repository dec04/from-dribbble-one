import "reset.css";
import "./styles.scss";
import ActivityFirst from "./components/ActivityFirst";
import ActivitySecond from "./components/ActivitySecond";
import ActivityThird from "./components/ActivityThird";
import { useState } from "react";

export default function App() {
  const [curStep, setCurStep] = useState(0);

  const updateStep = (step) => {
    console.log(`Update to state: ${step}`);
    setCurStep(step);
  };

  return (
    <div className="app">
      <ActivityFirst curStep={curStep} updateStep={updateStep} />
      <ActivitySecond curStep={curStep} updateStep={updateStep} />
      <ActivityThird curStep={curStep} updateStep={updateStep} />
    </div>
  );
}
