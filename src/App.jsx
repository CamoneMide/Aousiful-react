import React from "react";
import { Routes, Route } from "react-router-dom";
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
// import Lenis from "lenis";

function App() {
  const [loader, setLoader] = React.useState(false);
  const [navToggle, setNavToggle] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [abtCurIndex, setAbtCurIndex] = React.useState(0);
  const [currIndex, setCurrIndex] = React.useState(0);
  const [currentHeight, setCurrentHeight] = React.useState(84);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const navTarget = React.useRef(null);

  // React.useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  function handleNavToggle() {
    const rootElement = document.documentElement;

    setNavToggle((prev) => {
      return !prev;
    });
    rootElement.toggleAttribute("menu-open");
  }

  React.useEffect(() => {
    window.addEventListener("scroll", function () {
      // const navbar = document.getElementById("nav");
      const navbar = navTarget.current;
      const scrollHeight = window.pageYOffset;
      const navHeight = navbar.getBoundingClientRect().height;
      setCurrentHeight(scrollHeight + navHeight - 2);
      if (scrollHeight > navHeight) {
        navbar.classList.add("shPSticky");
      } else {
        navbar.classList.remove("shPSticky");
      }
    });
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      // const navbar = document.getElementById("nav");
      const navbar = navTarget.current;
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // React.useEffect(() => {
  //   const handleLoad = () => setLoader(true);

  //   window.addEventListener("load", handleLoad);

  //   return () => window.removeEventListener("load", handleLoad);
  // }, []);

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
      if (abtCurIndex > showcaseSlides.length - 2) {
        setAbtCurIndex(0);
      } else {
        setAbtCurIndex((prev) => {
          return prev + 1;
        });
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [abtCurIndex]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let myWidth;
  let prevIndex;
  let nextIndex;
  if (windowWidth < 640 || windowWidth === 640) {
    myWidth = 100;
    prevIndex = 1;
    nextIndex = 2;
  }
  if (windowWidth > 640 || windowWidth === 760) {
    myWidth = 52;
    prevIndex = 1;
    nextIndex = 2;
  }
  if (windowWidth > 868) {
    myWidth = 26;
    prevIndex = 3;
    nextIndex = 4;
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (currIndex > properties.length - nextIndex) {
        setCurrIndex(0);
      } else {
        setCurrIndex((prev) => {
          return prev + 1;
        });
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [currIndex, nextIndex]);

  return (
    <>
      <div className="bg-[#FDFDF3]">
        <Routes>
          <>
            <Route path="/" element={<Loader loader={loader} />} />
            <Route path="/signUp" element={<Loader loader={loader} />} />
            <Route path="/signIn" element={<Loader loader={loader} />} />
          </>
        </Routes>
        <div
          className={`pageContent bg-[#FDFDF3] relative ${
            loader ? "tPVisisble" : undefined
          } `}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Nav
                    handleNavToggle={() => {
                      handleNavToggle();
                    }}
                    navToggle={navToggle}
                    currentHeight={currentHeight}
                    myRef={navTarget}
                  />
                  <HomeSection currentIndex={currentIndex} />
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
    </>
  );
}

export default App;
