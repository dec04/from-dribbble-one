import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import { useState } from "react";

export default function CheckBox(props) {
  const [checked, setChecked] = useState(true);

  return (
    <div className="checkbox__component">
      <span className="checkbox__component__title">{props.title}</span>
      <button
        onClick={() => {
          setChecked(!checked);
        }}
        className="checkbox__component__checkbox"
      >
        {checked ? <Check /> : <Close />}
      </button>
    </div>
  );
}
