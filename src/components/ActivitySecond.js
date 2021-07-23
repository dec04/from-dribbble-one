import AbsImage2 from "./AbsImage2";
import TabBar from "./TabBar";
import Next from "@material-ui/icons/NavigateNextOutlined";
import { useState, useEffect } from "react";

export default function ActivitySecond(props) {
  const [state, setState] = useState(0);

  useEffect(() => {
    updateState(props.curStep);

    let ms = document.getElementById("mobile-second");

    if (state === 1) {
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
    <div id="mobile-second" className={"mobile second"}>
      <TabBar
        title="Step 1/3"
        prevStep={() => {
          props.updateStep(0);
        }}
      />
      <AbsImage2 />
      <div className="second_step__button__wrapper">
        <button
          onClick={() => {
            props.updateStep(2);
          }}
          className="second_step__button"
        >
          Next
          <Next fontSize="small" />
        </button>
      </div>
      <h2>Set your rules for minimalism</h2>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}
