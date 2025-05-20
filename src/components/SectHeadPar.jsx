import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SectHeadPar = ({ head, text }) => {
  const sectHPpRefG = React.useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".propSecHdG",
          start: "top 92%",
          end: "top 8%",
          toggleActions: "play none play none",
        },
      });

      tl.from(".propSecHdG", { opacity: 0, y: -40, duration: 0.5 }).from(
        ".propSecTextG",
        { opacity: 0, y: 40, duration: 0.5 }
      );
    },
    { scope: sectHPpRefG }
  );

  return (
    <>
      <div ref={sectHPpRefG} className="font-[600] interF">
        <h2 className="text-[38px] lg:text-[44px] leading-[67px] text-[#000000] text-center propSecHdG">
          {head}
        </h2>
        <h4 className="text-[18px] lg:text-[20px] text-[#6F7B6ED6] text-center propSecTextG">
          {text}
        </h4>
      </div>
    </>
  );
};

export default SectHeadPar;
