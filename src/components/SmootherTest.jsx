import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register plugins
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const SmootherTest = () => {
  const mainWrapper = useRef();
  const contentWrapper = useRef();

  // Initialize ScrollSmoother and animations
  useGSAP(
    () => {
      // Create the smooth scroller
      ScrollSmoother.create({
        wrapper: mainWrapper.current,
        content: contentWrapper.current,
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
      });

      // Section 1 - Fade in
      gsap.from(".section-1 .box", {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".section-1",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Section 2 - Parallax effect
      gsap.to(".section-2 .parallax-img", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".section-2",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Section 3 - Pin with animation
      gsap.to(".section-3 .animated-element", {
        rotation: 360,
        scrollTrigger: {
          trigger: ".section-3",
          pin: true,
          start: "top top",
          end: "+=1000",
          scrub: 1,
        },
      });

      // Section 4 - Horizontal scroll
      gsap.to(".section-4 .horizontal-container", {
        x: () =>
          -(
            document.querySelector(".horizontal-container").scrollWidth -
            window.innerWidth
          ),
        ease: "none",
        scrollTrigger: {
          trigger: ".section-4",
          pin: true,
          scrub: 1,
          end: () =>
            "+=" + document.querySelector(".horizontal-container").scrollWidth,
        },
      });
    },
    { scope: contentWrapper }
  );

  return (
    <div id="smooth-wrapper" ref={mainWrapper}>
      <div id="smooth-content" ref={contentWrapper}>
        {/* Hero Section */}
        <section className="flex items-center justify-center h-screen bg-gray-100 hero">
          <h1 className="text-6xl font-bold" data-speed="0.7">
            Smooth Scroll Experience
          </h1>
        </section>

        {/* Section 1 - Fade In */}
        <section className="py-20 bg-white section-1">
          <div className="container mx-auto">
            <h2 className="mb-10 text-4xl">Fade In Effect</h2>
            <div className="grid grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="p-8 text-white bg-blue-500 rounded-lg box"
                >
                  Item {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 - Parallax */}
        <section className="relative h-screen overflow-hidden bg-gray-200 section-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="z-10 text-4xl text-white">Parallax Section</h2>
          </div>
          <img
            src="https://source.unsplash.com/random/1600x900"
            alt="Parallax"
            className="absolute inset-0 object-cover w-full h-full parallax-img"
            data-speed="0.5"
          />
        </section>

        {/* Section 3 - Pinned Animation */}
        <section className="text-white bg-indigo-900 section-3">
          <div className="container py-40 mx-auto">
            <h2 className="mb-20 text-4xl">Pinned Animation</h2>
            <div className="w-40 h-40 mx-auto bg-yellow-400 animated-element"></div>
          </div>
        </section>

        {/* Section 4 - Horizontal Scroll */}
        <section className="bg-gray-100 section-4">
          <div className="flex py-40 horizontal-container w-max">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex-shrink-0 w-screen px-10">
                <div className="p-20 text-center text-white bg-green-500 rounded-lg">
                  <h3 className="mb-4 text-3xl">Horizontal Item {item}</h3>
                  <p>Scroll right to see more</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Section */}
        <section className="flex items-center justify-center min-h-screen text-white bg-black">
          <h2 className="text-6xl">The End</h2>
        </section>
      </div>
    </div>
  );
};

export default SmootherTest;
