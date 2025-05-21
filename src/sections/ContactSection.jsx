import React from "react";
import { accordions } from "../constants";
import { Accordion, Button } from "../components";
import contactShowcaseSrc from "/src/assets/images/home-showcase11.jpg";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ContactSection = () => {
  const contactRefG = React.useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactRefG.current,
          start: "12% 100%",
          end: "68% 0%",
          toggleActions: "play reverse play reverse",
          // scrub: 1,
          // markers: true,
        },
      });

      tl.from(
        [
          ".accStack-1",
          ".accStack-2",
          ".accStack-3",
          ".accStack-4",
          ".accStack-5",
        ],
        {
          y: 50,
          opacity: 0,
          // duration: 1.2,
          stagger: {
            amount: 0.8,
            from: "start",
          },
        }
      );

      gsap.from(".freqAQG", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".freqAQG",
          start: "0% 100%",
          end: "100% 0%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(".imgContactG", {
        x: "-80%",
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".imgContactG",
        },
      });

      gsap.from(".btnContactG", {
        y: "-120%",
        opacity: 0,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          trigger: ".btnContactG",
          start: "0% 100%",
          end: "100% 0%",
          toggleActions: "play reverse play reverse",
        },
      });
    },
    { scope: contactRefG }
  );

  return (
    <>
      <section
        ref={contactRefG}
        className="px-5 py-[90px] lg:px-10"
        id="contact"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] lg:text-[44px] lg:leading-[67px] leading-[48px] text-[#000000] font-[600] freqAQG">
            Frequently Asked Questions
          </h2>
          <div className="lg:grid flex flex-col-reverse gap-[0] lg:gap-[50px] lg:grid-cols-2 mt-[30px] lg:-[50px]">
            <div className="flex flex-col items-start md:mt-[30px] lg:mt-[0]">
              <div className="h-[450px] w-full rounded-[15px] overflow-hidden hidden md:flex imgContactG">
                <img
                  src={contactShowcaseSrc}
                  alt="showcase"
                  className="w-full h-full rounded-[15px] object-cover hover:scale-[1.2] imgTrans"
                />
              </div>

              <div className="leading-[67px] mt-10 btnContactG">
                <Button text={"Contact us"} href={""} lite={false} />
              </div>
            </div>

            <div>
              <div className="shfaq">
                {accordions.map((accordion) => {
                  return (
                    <Accordion
                      key={accordion.id}
                      head={accordion.head}
                      content={accordion.content}
                      state={accordion.state}
                      contClassG={`accStack-${accordion.id}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
