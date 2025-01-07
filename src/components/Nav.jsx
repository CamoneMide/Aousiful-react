import Button from "./Button";
import { navLinks } from "../constants";
import Logo from "./Logo";

const Nav = ({ handleNavToggle, navToggle, currentHeight }) => {
  const myStyle = {
    top: currentHeight,
  };

  return (
    <>
      <nav
        className={`text-[#369536] flex flex-row justify-between items-center leading-[67px] px-5 lg:px-10 py-[10px] navTrans ${
          navToggle ? "shPStickyTest" : null
        }`}
        id="nav"
      >
        <Logo />
        <div className="hidden interF lg:flex">
          {navLinks.map((navLink) => (
            <a
              href={navLink.href}
              key={navLink.label}
              className="text-[16px] font-[500] px-[10px] mr-[16px] hover:mx-[8px] navLink scroll-link"
            >
              {navLink.label}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <div className="hidden interF md:flex">
            <div className="mr-[10px]">
              <Button text={"Sign Up"} href={"/signUp"} lite={false} />
            </div>
            <div className="ml-[10px]">
              <Button text={"Sign In"} href={"/signIn"} lite={true} />
            </div>
          </div>
          <div className="flex lg:hidden md:ml-[24px]">
            <button
              className="navTogBtn border-[#369536] border-[1px] rounded-[6px]"
              onClick={handleNavToggle}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`interF navTog text-[#369536] pt-5 ${
          navToggle ? "navTog-show" : undefined
        }`}
        style={myStyle}
      >
        <div className="flex flex-col">
          {navLinks.map((navLink) => (
            <a
              href={navLink.href}
              key={navLink.label}
              className="text-[26px] pt-5 font-[700] px-[16px] scroll-link"
              onClick={handleNavToggle}
            >
              {navLink.label}
            </a>
          ))}
        </div>

        <div>
          <p className="text-[26px] pt-5 font-[700] px-[16px]">Footer</p>{" "}
        </div>
      </div>
    </>
  );
};

export default Nav;
