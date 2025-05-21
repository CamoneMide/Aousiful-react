import React from "react";
import { Routes, Route } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Loader, Nav, Sidescroller } from "./components";
import {
  AboutSection,
  ContactSection,
  FindYHSection,
  FooterSection,
  HomeSection,
  PropertiesSection,
  ServicesSection,
  TestimonialsSection,
} from "./sections";
import { properties, showcaseSlides } from "./constants";
import { SignInPage, SignUpPage } from "./pages";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

function App() {
  const [loader, setLoader] = React.useState(false);
  const [navToggle, setNavToggle] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [abtCurIndex, setAbtCurIndex] = React.useState(0);
  const [currIndex, setCurrIndex] = React.useState(0);
  const [currentHeight, setCurrentHeight] = React.useState(84);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const navTarget = React.useRef(null);
  const smootherWrapper = React.useRef(null);
  const smootherContent = React.useRef(null);

  // Initialize ScrollSmoother and animations
  useGSAP(() => {
    // Only initialize when loader is true and not on mobile
    if (loader && windowWidth > 768) {
      ScrollSmoother.create({
        wrapper: smootherWrapper.current,
        content: smootherContent.current,
        smooth: 1.2,
        effects: true,
        normalizeScroll: true,
        smoothTouch: 0.1,
        ignoreMobileResize: true,
      });

      // ScrollTrigger.create({
      //   trigger: "#aboutUs",
      //   start: "top top",
      //   end: "bottom 10%",
      //   markers: true,
      //   scrub: 1,
      //   onEnter: () => navTarget.current.classList.add("shPStickyTest"),
      //   // onLeave: () => navTarget.current.classList.remove("shPStickyTest"),
      // });

      // Create scroll triggers for various sections
      // gsap.utils.toArray("section").forEach((section) => {
      //   ScrollTrigger.create({
      //     trigger: section,
      //     start: "top 80%",
      //     end: "bottom 20%",
      //     onEnter: () => section.classList.add("active"),
      //     onLeaveBack: () => section.classList.remove("active"),
      //   });
      // });

      // Special animation for the home section
      // gsap.from(".home-section", {
      //   opacity: 0,
      //   y: 50,
      //   duration: 1,
      //   ease: "power2.out",
      // });
    }

    return () => {
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
      }
    };
  }, [loader, windowWidth]);

  function handleNavToggle() {
    const rootElement = document.documentElement;
    setNavToggle((prev) => !prev);
    rootElement.toggleAttribute("menu-open");

    // Refresh ScrollSmoother when nav is toggled
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().refresh();
    }
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const navbar = navTarget.current;
      if (!navbar) return;

      const scrollHeight = window.pageYOffset;
      const navHeight = navbar.getBoundingClientRect().height;
      setCurrentHeight(scrollHeight + navHeight - 2);

      if (scrollHeight > navHeight) {
        navbar.classList.add("shPSticky");
      } else {
        navbar.classList.remove("shPSticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
      // Refresh ScrollSmoother after content loads
      setTimeout(() => {
        if (ScrollSmoother.get()) {
          ScrollSmoother.get().refresh();
          ScrollTrigger.refresh();
        }
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev > showcaseSlides.length - 2 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setAbtCurIndex((prev) =>
        prev > showcaseSlides.length - 2 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [abtCurIndex]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Refresh on resize
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().refresh();
        ScrollTrigger.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate responsive values
  const { myWidth, prevIndex, nextIndex } = React.useMemo(() => {
    if (windowWidth <= 640) return { myWidth: 100, prevIndex: 1, nextIndex: 2 };
    if (windowWidth <= 868) return { myWidth: 52, prevIndex: 1, nextIndex: 2 };
    return { myWidth: 26, prevIndex: 3, nextIndex: 4 };
  }, [windowWidth]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) =>
        prev > properties.length - nextIndex ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [currIndex, nextIndex]);

  return (
    <div className="bg-[#FDFDF3] overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Loader loader={loader} />} />

        <Route path="/signUp" element={<Loader loader={loader} />} />
        <Route path="/signIn" element={<Loader loader={loader} />} />
      </Routes>

      {/* ScrollSmoother wrapper structure */}

      <div
        id="smooth-wrapper"
        ref={smootherWrapper}
        className={`pageContent overflow-x-hidden bg-[#FDFDF3] relative ${
          loader ? "tPVisisble" : ""
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Nav
                handleNavToggle={handleNavToggle}
                navToggle={navToggle}
                currentHeight={currentHeight}
                myRef={navTarget}
              />
            }
          />
        </Routes>
        <div
          id="smooth-content"
          className="lg:pb-[85px] overflow-x-hidden"
          ref={smootherContent}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Nav
                    handleNavToggle={handleNavToggle}
                    navToggle={navToggle}
                    currentHeight={currentHeight}
                    myRef={navTarget}
                  /> */}
                  <HomeSection
                    currentIndex={currentIndex}
                    className="home-section"
                  />
                  <div className="pt-[70px]">
                    <Sidescroller />
                  </div>
                  <Sidescroller direction={"right"} />
                  <AboutSection currentIndex={abtCurIndex} />
                  <PropertiesSection
                    currIndex={currIndex}
                    setCurrIndex={setCurrIndex}
                    myWidth={myWidth}
                    prevIndex={prevIndex}
                    nextIndex={nextIndex}
                  />
                  <ServicesSection />
                  <TestimonialsSection />
                  <ContactSection />
                  <FindYHSection />
                  <FooterSection />
                </>
              }
            />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/signIn" element={<SignInPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
