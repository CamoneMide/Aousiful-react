import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const FindYHSection = () => {
  const findYHRefG = React.useRef(null);

  useGSAP(
    () => {
      const splitDesText = new SplitText(".desFYHG", { type: "words" });
      gsap.from(".headFYHG", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".headFYHG",
          start: "0% 100%",
          end: "100% 0%",

          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(splitDesText.words, {
        y: 50,
        opacity: 0,
        // duration: 1,
        stagger: {
          amount: 0.4,
          from: "start",
        },
        scrollTrigger: {
          trigger: splitDesText.words,
          start: "0% 100%",
          end: "100% 0%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".lrnMFYHG", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".lrnMFYHG",
          start: "0% 100%",
          end: "100% 0%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: findYHRefG }
  );

  return (
    <>
      <section ref={findYHRefG} className="bg-[#369536]">
        <div className="flex flex-col items-center px-5 py-10 lg:px-10">
          <div>
            <h2 className="text-[26px] lg:text-[32px] text-[#9DD144] font-[700] text-center headFYHG">
              Find Your Dream Home With Us
            </h2>
            <h4 className="text-[16px] lg:text-[18px] text-[#F9F9F9] font-[600] text-center mt-[20px] mb-[30px] lg:w-[65%] m-auto md:w-[90%] w-full desFYHG">
              Discover a place you'll love to call home. With a wide selection
              of properties, expert guidance, and personalized support, finding
              your dream home has never been easier.
            </h4>
          </div>
          <div className="leading-[67px] lrnMFYHG">
            <a
              href="#services"
              className="text-[20px] font-[500] px-[26px] py-[13px] text-[#FDFDF3] rounded-[15px] border-[#FFFFFF] border-[1px] hover:text-[#369536] hover:bg-[#FDFDF3] navTrans"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindYHSection;
