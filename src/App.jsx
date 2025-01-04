import React from "react";
import { Loader, Nav } from "./components";
import { AboutSection, HomeSection, PropertiesSection } from "./sections";
import { properties, showcaseSlides } from "./constants";

function App() {
  const [loader, setLoader] = React.useState(false);
  const [navToggle, setNavToggle] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currIndex, setCurrIndex] = React.useState(0);

  const rootElement = document.documentElement;
  // const scrollers = document.querySelectorAll(".scroller");

  function handleNavToggle() {
    setNavToggle((prev) => {
      return !prev;
    });
    rootElement.toggleAttribute("menu-open");
  }

  // React.useEffect(() => {
  //   function addAnimation() {
  //     scrollers.forEach((scroller) => {
  //       scroller.setAttribute("data-animated", true);

  //       const scrollerInner = scroller.querySelector(".scroller_inner");
  //       const scrollerContent = Array.from(scrollerInner.children);

  //       scrollerContent.forEach((item) => {
  //         const duplicatedItem = item.cloneNode(true);
  //         duplicatedItem.setAttribute("aria-hidden", true);
  //         scrollerInner.appendChild(duplicatedItem);
  //       });
  //     });
  //   }
  //   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //     addAnimation();
  //   }
  // });

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      const navbar = document.getElementById("nav");
      const scrollHeight = window.pageYOffset;
      const navHeight = navbar.getBoundingClientRect().height;
      if (scrollHeight > navHeight) {
        navbar.classList.add("shPSticky");
      } else {
        navbar.classList.remove("shPSticky");
      }
    });
  }, []);

  React.useEffect(() => {
    window.addEventListener("load", () => {
      setLoader(!loader);
    });
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex > showcaseSlides.length - 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((prev) => {
          return prev + 1;
        });
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currIndex > properties.length - 4) {
        setCurrIndex(0);
      } else {
        setCurrIndex((prev) => {
          return prev + 1;
        });
      }
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currIndex]);

  return (
    <>
      <div className="bg-[#FDFDF3] theBody">
        <Loader loader={loader} />
        <div
          className={`pageContent bg-[#FDFDF3] relative ${
            loader ? "tPVisisble" : undefined
          }`}
        >
          <Nav
            handleNavToggle={() => {
              handleNavToggle();
            }}
            navToggle={navToggle}
          />
          <HomeSection currentIndex={currentIndex} />
          {/* <Sidescroller /> */}
          <AboutSection currentIndex={currentIndex} />
          <PropertiesSection
            currIndex={currIndex}
            setCurrIndex={setCurrIndex}
          />
        </div>
      </div>
    </>
  );
}

export default App;
