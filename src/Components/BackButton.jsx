import { Link } from "react-router-dom";
import ArrowLeft from "../assets/svg/ArrowLeft.svg";

export default function BackButton({ path }) {
  return (
    <div>
      <Link to={path}>
        <img
          src={ArrowLeft}
          alt="back"
          className="bg-white rounded-[9px] p-[8px] cursor-pointer"
        />
      </Link>
    </div>
  );
}
