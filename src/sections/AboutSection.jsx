import React from "react";
import { aboutSlides } from "../constants";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const AboutSection = ({ currentIndex }) => {
  const abtRefG = React.useRef(null);
  let lite = false;

  useGSAP(
    () => {
      let splitApar = SplitText.create(".abtParG1", { type: "lines" });
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.inOut",
          stagger: {
            amount: 0.6,
            from: "start",
          },
        },
        scrollTrigger: {
          trigger: abtRefG.current,
          start: "top 80%",
          end: "top buttom",
          // duration: 1,
          // scrub: true,
          // markers: true,
        },
      });

      tl.from(".imgAbtG", { opacity: 0, y: -80 })
        .from(".hdTextG", {
          opacity: 0,
          y: 25,
        })
        .from(splitApar.lines, {
          y: 30,
          opacity: 0,
          autoAlpha: 0,
          stagger: {
            amount: 0.3,
            from: "start",
          },
          ease: "power3.inOut",
        });

      gsap.from(".abtParG2", {
        y: -25,
        opacity: 0,
        duration: 0.6,
        delay: 0.6,
        ease: "elastic.inOut(1,0.3)",
        scrollTrigger: {
          trigger: ".abtParG2",
          start: "top 100%",
          end: "top buttom",
          toggleActions: "play reverse play reverse",
        },
      });
      gsap.from(".abtBtnG1", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".abtBtnG1",
          start: "top 100%",
          end: "top buttom",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: abtRefG }
  );

  return (
    <>
      <section className="px-5 py-[90px] lg:px-10" id="aboutUs" ref={abtRefG}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[30px] mt-[10px] interF">
          <div className="relative flex w-full h-[300px] md:h-[450px] lg:h-[564px] overflow-hidden rounded-[20px] imgAbtG">
            {aboutSlides.map((aboutSlide, index) => {
              const myStyle = {
                transform: `translateX(-${currentIndex * 100}%)`,
                left: `${index * 100}%`,
              };
              return (
                <div
                  // className="absolute flex w-full h-full overflow-hidden navTrans imgSlide"
                  className="absolute w-full h-full overflow-hidden navTrans aboutImgSlide"
                  key={aboutSlide.id}
                  style={myStyle}
                >
                  <img
                    src={aboutSlide.src}
                    alt="about"
                    className="w-full h-full hover:scale-[1.2] imgTrans"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            <h2 className="lg:leading-[74px] leading-[45px] text-[46px] lg:text-[76px] italic font-[700] text-[#369536] flex flex-col hdTextG">
              <span className="text-[#9dd144]">Your</span>New Adventure Starts
              Here
            </h2>
            <p className=" text-[16px] leading-[25px] lg:text-[18px] font-[500] text-[#6F7B6ED6] py-4 abtParG1">
              Immerse yourself in vibrant neighbourhoods and serene suburbs. Our
              properties offer the perfect blend of convenience and
              tranquillity. From bustling city centres to peaceful countryside
              retreats, we have the ideal space for you. Find your dream home
              and start living the life you deserve.
            </p>
            <p className="text-[16px] leading-[25px] lg:leading-[30px] lg:text-[18px] font-[500] text-[#6F7B6ED6] pb-6 abtParG2">
              Find your new home with ease. We are here to provide you with the
              very best options and best of the experience.
            </p>
            <div className="leading-[67px] abtBtnG1">
              <a
                href={"#services"}
                className={`text-[16px] font-[500] px-[26px] py-[13px] rounded-[15px] border-[#369536] border-[1px] cursor-pointer navTrans ${
                  lite
                    ? "bg-[transparent] text-[#369536] hover:bg-[#369536] hover:text-[#FDFDF3]"
                    : "bg-[#369536] text-[#FDFDF3] hover:bg-[transparent] hover:text-[#369536]"
                }`}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
