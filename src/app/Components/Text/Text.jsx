import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./styles.scss";

export default function Text({ text }) {
  return (
    <span className="select">
      {text} <MdOutlineKeyboardArrowRight />
    </span>
  );
}
