import ArrowBack from "@material-ui/icons/ArrowBackOutlined";
import Bookmark from "@material-ui/icons/BookmarkBorderOutlined";
import List from "@material-ui/icons/SortOutlined";

export default function TabBar(props) {
  return (
    <div className="tabbar">
      <span>
        <ArrowBack onClick={props.prevStep} fontSize="small" />
      </span>
      <span>{props.title}</span>
      <span>
        <Bookmark className="_abs" fontSize="small" />
        <List className="flip" fontSize="small" />
      </span>
    </div>
  );
}
