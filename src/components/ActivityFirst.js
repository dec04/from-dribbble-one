import AbsImage1 from "./AbsImage1";
import Next from "@material-ui/icons/NavigateNextOutlined";

export default function ActivityFirst(props) {
  return (
    <div className="mobile">
      <h1> - Name of Newspaper - </h1>
      <AbsImage1 />
      <button
        onClick={() => {
          props.updateStep(1);
        }}
        className="next_step_button play__button"
      >
        Next <Next fontSize="small" />
      </button>
      <h2>Step-by-step Guide to Become a Minimalist</h2>
      <p className="author">by Marie Condo</p>
    </div>
  );
}
