import { Link } from "react-router-dom";
import logoImg from "../assets/images/Frame 167.png";

const Logo = () => {
  return (
    <>
      <Link
        to={"/"}
        className="text-[28px] font-normal flex items-center carterOneF"
      >
        Aousiful
        <span className="">
          <img width="35" height="35" src={logoImg} alt="logo" />
        </span>
      </Link>
    </>
  );
};

export default Logo;
