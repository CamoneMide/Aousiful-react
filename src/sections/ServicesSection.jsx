import React from "react";
import { serviceCards } from "../constants";
import { SectHeadPar, ServiceCard } from "../components";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ServicesSection = () => {
  const servRefG = React.useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.4, ease: "power4.inOut" },
        scrollTrigger: {
          trigger: ".serCardG-1",
          // start: "top 74%",
          // end: "top 40%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".serCardG-1", { opacity: 0, y: 60 })
        .from(".serCardG-2", { opacity: 0, y: 60 })
        .from(".serCardG-3", { opacity: 0, y: 60 });
    },
    { scope: servRefG }
  );

  return (
    <>
      <section className="px-5 py-[90px] lg:px-10" id="services">
        <div className="flex flex-col items-center">
          <SectHeadPar
            head={"Our Services"}
            text={
              "Our Services Are Designed to Make Finding Your ideal home simple and enjoyable"
            }
          />

          <div
            ref={servRefG}
            className="grid grid-cols-1 lg:grid-cols-3 mt-[60px] gap-10 lg:gap-10"
          >
            {serviceCards.map((serviceCard) => {
              return (
                <ServiceCard
                  key={serviceCard.id}
                  cardImgSrc={serviceCard.cardImgSrc}
                  cardImgAlt={serviceCard.cardImgAlt}
                  cardH2={serviceCard.cardH2}
                  cardText={serviceCard.cardText}
                  custClassG={`serCardG-${serviceCard.id}`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
