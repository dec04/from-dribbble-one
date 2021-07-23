import AbsImage3 from "./AbsImage3";
import CheckBox from "./CheckBox";
import TabBar from "./TabBar";
import { useState, useEffect } from "react";

export default function ActivityThird(props) {
  const [state, setState] = useState(0);

  useEffect(() => {
    updateState(props.curStep);

    let ms = document.getElementById("mobile-third");

    if (state === 2) {
      ms.classList.remove("fadeOut");
      ms.classList.add("fadeIn");
    } else {
      ms.classList.remove("fadeIn");
      ms.classList.add("fadeOut");
    }
  });

  const updateState = (state) => {
    setState(state);
  };

  return (
    <div id="mobile-third" className="mobile third">
      <TabBar
        title="Step 2/3"
        prevStep={() => {
          props.updateStep(1);
        }}
      />
      <AbsImage3 />
      <CheckBox title="Pick out anything you haven’t worm in a year and donate it or sell" />
      <CheckBox title="Sell or donate anything that doesn’t fit" />
      <div className="next_step__wrapper">
        <button
          onClick={() => {
            props.updateStep(0);
          }}
          className="next_step__button"
        >
          Finish
        </button>
      </div>
    </div>
  );
}
