import React from "react";
import Button from "./Button";
import { navLinks } from "../constants";
import Logo from "./Logo";
import { BsGithub } from "react-icons/bs";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const Nav = ({ handleNavToggle, navToggle, currentHeight, myRef }) => {
  const tl = gsap.timeline({
    defaults: {
      // duration: 0.4,
      stagger: {
        amount: 0.1,
        from: "start",
      },
      ease: "power3.inOut",
    },
  });
  // const containerG = React.useRef();

  useGSAP(
    () => {
      tl.from([".logoG"], {
        opacity: 0,
        x: -20,
        delay: 2.1,
      })
        .from([".auth-btnG2"], {
          opacity: 0,
          x: 20,
        })
        .from([".auth-btnG1"], {
          opacity: 0,
          x: 30,
        })
        .from([".nav-itemG"], {
          opacity: 0,
          y: -20,
        });
    },
    { scope: myRef }
  ); // Auto-cleanup + scope targeting

  function handleSectScroll(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    gsap.to(window, { duration: 1, scrollTo: { y: targetId, autoKill: true } });
  }

  React.useEffect(() => {
    const preventScroll = (e) => {
      e.preventDefault();
    };
    const noTouch = document.getElementById("noTouch");

    noTouch.addEventListener("touchmove", preventScroll, { passive: false });

    // Cleanup event listener on unmount
    return () => {
      noTouch.removeEventListener("touchmove", preventScroll);
    };
  }, []);

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
        ref={myRef}
      >
        <div className="logoG">
          <Logo />
        </div>

        <div className="hidden interF lg:flex nav-itemG">
          {navLinks.map((navLink) => (
            <a
              href={navLink.href}
              onClick={(e) => handleSectScroll(e)}
              key={navLink.label}
              className="text-[16px] font-[500] px-[10px] mr-[16px] hover:mx-[8px] navLink scroll-link"
            >
              {navLink.label}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <div className="hidden interF md:flex">
            <div className="mr-[10px] auth-btnG1">
              <Button text={"Sign Up"} href={"/signUp"} lite={false} />
            </div>
            <div className="ml-[10px] auth-btnG2">
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

      {/* Slide In */}
      <div
        className={`interF navTog text-[#369536] pt-[30px] ${
          navToggle ? "navTog-show" : undefined
        } px-5 md:px-10`}
        style={myStyle}
        id="noTouch"
      >
        <div className="flex flex-col items-center">
          {navLinks.map((navLink) => (
            <a
              href={navLink.href}
              key={navLink.label}
              className="text-[28px] md:text-[34px] pt-5 font-[700]"
              onClick={handleNavToggle}
            >
              {navLink.label}
            </a>
          ))}
        </div>

        <div className="pb-[30px] w-full">
          <div className="flex w-full mb-[50px] justify-center">
            <div className="mr-[10px]" onClick={handleNavToggle}>
              <Button text={"Sign Up"} href={"/signUp"} lite={false} />
            </div>
            <div className="ml-[10px]" onClick={handleNavToggle}>
              <Button text={"Sign In"} href={"/signIn"} lite={true} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:justify-between md:flex-row text-[16px] lg:text-[18px] font-[600] text-[#6F7B6ED6] border-t-[1px] border-t-[#6f7b6e99] pt-[10px] ">
            <p>Copyright &copy; 2025, Aousiful~React.</p>
            <p className="flex flex-row items-center flex-nowrap">
              <strong>Developed by</strong>
              <a href="#" target="_blank" className="ml-1">
                <i>Camone_Mide</i>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/mide-web-developer"
                target="_blank"
                className="text-[18px] text-[#369536] px-[4px]"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/CamoneMide"
                target="_blank"
                className="text-[#369536] ml-[1px]"
              >
                <BsGithub size={14} />
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
