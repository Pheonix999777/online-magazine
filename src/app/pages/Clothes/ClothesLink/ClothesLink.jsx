import Link from "next/link";
import DubbleRight from "../../../../../public/icons/dubble-right.svg";
import "./styles.scss";

export default function ClohtesLink({ link, text }) {
  return (
    <Link href={link} className="clothes__btn">
      <span className="clothes__btn-icon">
        <DubbleRight />
      </span>
      <span className="clothes__btn-new-icon">
        <DubbleRight />
      </span>
      {text}
    </Link>
  );
}
