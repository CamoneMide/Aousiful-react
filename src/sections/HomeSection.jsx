import React from "react";
import { circleImages, showcaseSlides } from "../constants";
import locationIcon from "/src/assets/icons/locationIcon.png";

import houseIcon from "/src/assets/icons/houseIcon.png";
import moneyIcon from "/src/assets/icons/moneyIcon.png";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const HomeSection = ({ currentIndex }) => {
  const heroG = React.useRef(null);
  const [searchTabActive, setSearchTabActive] = React.useState(false);

  useGSAP(
    () => {
      let splitPar = SplitText.create(".parContG", { type: "words" });
      const tl = gsap.timeline({
        defaults: {
          // duration: 0.6,
          stagger: {
            amount: 0.8,
            from: "start",
          },
          ease: "power3.inOut",
        },
        // scrollTrigger: {
        //   trigger: ".textContG",
        //   toggleActions: "play reverse play none",
        // },
      });

      const tl1 = gsap.timeline({
        defaults: {
          stagger: {
            amount: 0.01,
            from: "start",
          },
          ease: "power3.inOut",
          // ease: "elastic.inOut(1,0.3)",
        },
        scrollTrigger: {
          trigger: heroG.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play reverse play none",
        },
      });

      tl.from([".textContG"], {
        opacity: 0,
        x: "-70%",
        delay: 2,
      }).from([".hsSearch"], {
        opacity: 0,
        y: 20,
      });

      tl1
        .to(
          ".circleG-5",
          // { opacity: 0, x: "-50%" },
          {
            opacity: 1,
            x: "280%",
            // delay: 2.1,
          }
        )
        .to(
          ".circleG-4",
          // { opacity: 0, x: "-50%" },
          {
            opacity: 1,
            x: "210%",
          }
        )
        .to(
          ".circleG-3",
          // { opacity: 0, x: "-50%" },
          {
            opacity: 1,
            x: "140%",
          }
        )
        .to(
          ".circleG-2",
          // { opacity: 0, x: "-50%" },
          {
            opacity: 1,
            x: "70%",
          }
        )
        .to(
          ".circleG-1",
          // { opacity: 0, x: "-50%" },
          {
            opacity: 1,
            x: 0,
          }
        );

      gsap.from(".starContG", {
        opacity: 0,
        x: "50%",
        // delay: 2.2,
        duration: 1.2,
        ease: "elastic.inOut(1,0.3)",
        scrollTrigger: {
          trigger: ".starContG",
          start: "top 80%",
          end: "bottom top",
          // markers: true,
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(splitPar.words, {
        y: 25,
        opacity: 0,
        stagger: {
          amount: 0.45,
          from: "start",
        },
        delay: 2,
        scrollTrigger: {
          trigger: splitPar.words,
          toggleActions: "play reverse play none",
        },
      });

      gsap.from([".imgContG"], {
        opacity: 0,
        x: "70%",
        duration: 0.5,
        delay: 2,
      });
    },
    { scope: heroG }
  );

  function handleTabActiveToggle() {
    setSearchTabActive(!searchTabActive);
  }

  return (
    <>
      <section
        className="px-5 lg:px-10 lg:py-[60px] py-10"
        id="home"
        ref={heroG}
      >
        <div className="grid grid-cols-1 gap-[65px] lg:gap-5 lg:grid-cols-2 interF ">
          <div className="flex flex-col textContG">
            <h2 className="lg:leading-[80px] lg:text-[76px] leading-[50px] text-[46px] italic font-[700] text-[#369536] flex flex-col">
              <span className="text-[#9dd144]">Find Your</span>Perfect Home
            </h2>
            <p className="container leading-[25px] lg:leading-[35px] text-[16px] lg:text-[18px] font-[600] text-[#6F7B6ED6] py-4 pb-[30px] parContG">
              We offer a range of rentals tailored to fit your needs and
              lifestyle. With flexible options, fair pricing, and a friendly
              support team by your side, finding your next home is simple and
              stress free.
            </p>
            <div className="flex flex-row items-center justify-start mt-[25px] md:mt-[0px]">
              <div className="relative flex flex-row items-center justify-start w-full">
                {circleImages.map((circleImage, index) => {
                  const myStyle = {
                    // transform: `translateX(${index * 70}%)`,
                    opacity: 0,
                    zIndex: { index },
                    // left: `${index * 70}%`,
                  };

                  return (
                    <img
                      key={circleImage.id}
                      className={`absolute left-0 circleG-${circleImage.id}`}
                      src={circleImage.src}
                      alt={circleImage.alt}
                      style={myStyle}
                    />
                  );
                })}
              </div>
              <div className="text-[#FF8C00] hidden md:flex flex-row text-[22px] lg:-ml-[365px] md:-ml-[520px] starContG">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>

              <p className="ml-[10px] leading-[67px] text-[13px] font-[700] text-[#969191] hidden md:flex">
                4.8 (2.2k review)
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden h-[300px] md:h-[450px] lg:h-[531px] w-full rounded-[20px] flex imgContG">
            {showcaseSlides.map((showcaseSlide, index) => {
              const myStyle = {
                transform: `translateX(-${currentIndex * 100}%)`,
                left: `${index * 100}%`,
              };
              return (
                <div
                  className="absolute flex w-full h-full overflow-hidden navTrans imgSlide"
                  key={showcaseSlide.id}
                  style={myStyle}
                >
                  <img
                    src={showcaseSlide.src}
                    alt="showcase"
                    className="w-full h-full hover:scale-[1.2] imgTrans"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute top-0 left-0 -translate-y-[60%] flex flex-col w-full">
            <div className="flex flex-row justify-start interF mb-[10px]">
              <button
                type="button"
                className={`px-[26px] py-[8px] text-[#369536] text-[16px] mx-[12px] rounded-[25px] navTrans font-[500] ${
                  searchTabActive
                    ? "bg-[trannsparent]"
                    : "bg-[#E4F0DB] cursor-none"
                }`}
                onClick={handleTabActiveToggle}
              >
                House
              </button>
              <button
                type="button"
                className={`px-[26px] py-[8px] text-[#369536] text-[16px] mx-[12px] navTrans rounded-[25px] font-[500] ${
                  searchTabActive
                    ? "bg-[#E4F0DB] cursor-none"
                    : "bg-[trannsparent]"
                }`}
                onClick={handleTabActiveToggle}
              >
                Service Apartment
              </button>
            </div>
            {searchTabActive ? (
              <div className="w-[80%] px-[38px] py-[20px] hsSearch rounded-[30px] flex flex-row justify-between items-center">
                <div className="flex gap-[40px]">Not Available</div>
                <div className="text-[#FDFDF3E5] bg-[#369536] rounded-full flex p-[15px] text-[34px]">
                  <i className="bx bx-search"></i>
                </div>
              </div>
            ) : (
              <div className="w-[80%] px-[38px] py-[20px] hsSearch rounded-[30px] flex flex-row justify-between items-center">
                <div className="flex gap-[40px]">
                  <div className="flex flex-col gap-[17px] border-r-[#000000] border-r-[1px] pr-[40px]">
                    <label
                      className="text-[14px] lg:text-[16px] font-[700] text-[#969191CC]"
                      htmlFor="favLocation"
                    >
                      Location
                    </label>
                    <div className="relative flex gap-[17px] flex-row items-center">
                      <div>
                        <img src={locationIcon} alt="locationIcon" />
                      </div>
                      <select
                        name="favLocation"
                        id="favLocation"
                        defaultValue=""
                        required
                        className="bg-[transparent] text-[#6F7B6ED6] text-[18px] lg:text-[20px] font-[700] outline-none border-0 pr-[20px]"
                      >
                        <option value="la">LA, USA</option>
                        <option value="la">LA, USA</option>
                        <option value="la">LA, USA</option>
                        <option value="la">LA, USA</option>
                        <option value="la">LA, USA</option>
                      </select>
                      <div className="absolute right-0 bottom-0 text-[#6F7B6EF2] text-[28px] flex pointer-events-none bg-[#eff5e5]">
                        <i className="bx bx-chevron-down"></i>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[17px] border-r-[#000000] border-r-[1px] pr-[40px]">
                    <label
                      className="text-[14px] lg:text-[16px] font-[700] text-[#969191CC]"
                      htmlFor="favType"
                    >
                      Type
                    </label>
                    <div className="relative flex gap-[17px] flex-row items-center">
                      <div>
                        <img src={houseIcon} alt="houseIcon" />
                      </div>
                      <select
                        name="favType"
                        id="favType"
                        defaultValue=""
                        required
                        className="bg-[transparent] text-[#6F7B6ED6] text-[18px] lg:text-[20px] font-[700] outline-none border-0 pr-[20px]"
                      >
                        <option value="duplex">Duplex</option>
                        <option value="duplex">Duplex</option>
                        <option value="duplex">Duplex</option>
                        <option value="duplex">Duplex</option>
                        <option value="duplex">Duplex</option>
                      </select>
                      <div className="absolute right-0 bottom-0 text-[#6F7B6EF2] text-[28px] flex pointer-events-none bg-[#eff5e5]">
                        <i className="bx bx-chevron-down"></i>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[17px]">
                    <label
                      className="text-[14px] lg:text-[16px] font-[700] text-[#969191CC]"
                      htmlFor="favPrice"
                    >
                      Price Range
                    </label>
                    <div className="relative flex gap-[17px] flex-row items-center">
                      <div>
                        <img src={moneyIcon} alt="moneyIcon" />
                      </div>
                      <select
                        name="favPrice"
                        id="favPrice"
                        defaultValue=""
                        required
                        className="bg-[transparent] text-[#6F7B6ED6] text-[18px] lg:text-[20px] font-[700] outline-none border-0 pr-[20px]"
                      >
                        <option value="price">$30,000-$120,000</option>
                        <option value="price">$30,000-$120,000</option>
                        <option value="price">$30,000-$120,000</option>
                        <option value="price">$30,000-$120,000</option>
                        <option value="price">$30,000-$120,000</option>
                      </select>
                      <div className="absolute right-0 bottom-0 text-[#6F7B6EF2] text-[28px] flex pointer-events-none bg-[#e8ebd6] backdrop-blur-lg">
                        <i className="bx bx-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[#FDFDF3E5] bg-[#369536] rounded-full flex p-[15px] text-[34px]">
                  <i className="bx bx-search"></i>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
