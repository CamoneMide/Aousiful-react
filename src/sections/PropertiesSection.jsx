import React from "react";
import { properties } from "../constants";
import { Button, PropertyCard } from "../components";

const PropertiesSection = ({ currIndex, setCurrIndex }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  let myWidth;
  if (windowWidth < 640 || windowWidth === 640) {
    myWidth = 100;
  }
  if (windowWidth > 640 || windowWidth === 760) {
    myWidth = 52;
  }
  if (windowWidth > 868) {
    myWidth = 26;
  }

  return (
    <>
      <section className="bg-[#EAF4E8]" id="properties">
        <div className="px-5 py-[40px] lg:px-10 flex flex-col items-center">
          <div className="font-[600] interF">
            <h2 className="text-[40px] lg:text-[44px] leading-[67px] text-[#000000]">
              Featured properties
            </h2>
            <h4 className="text-[18px] lg:text-[20px] text-[#6F7B6ED6]">
              Find the Rental That Fits Your Lifestyle
            </h4>
          </div>
          <div
            // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-[40px] mt-[60px] gap-[30px] lg:gap-[20px] w-full"
            className="relative flex flex-row mb-[30px] py-[20px] mt-[40px] lg:mt-[50px] overflow-hidden px-5 lg:px-10 w-[100%] h-[420px] navTrans"
          >
            {/*  Items  */}
            {properties.map((property, index) => {
              const myStyle = {
                transform: `translateX(-${currIndex * 100}%)`,
                left: `${index * myWidth}%`,
                position: "absolute",
              };

              return (
                <div key={property.id} className="w-full">
                  <PropertyCard
                    name={property.name}
                    imgSrc={property.imgSrc}
                    imgAlt={property.imgAlt}
                    location={property.location}
                    price={property.price}
                    details={property.details}
                    myStyle={myStyle}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-row justify-between w-full ">
            <div className="flex items-center w-full gap-[2px]">
              {properties.map((property, index) => {
                return (
                  <div
                    className={`flex  flex-row p-[3px] md:p-[6px] border-[2px] border-[#369536] rounded-full navTrans ${
                      currIndex === index ? "bg-[#369536]" : null
                    }`}
                    // style={{ transform: `translateX(${index * 100}%)` }}
                    key={property.id}
                  ></div>
                );
              })}
            </div>

            <div className="flex flex-row">
              <div
                className="flex p-[6px] md:p-[12px] rounded-full border-[1px] border-[#00000080] text-[#00000080] text-[24px] mr-1 md:mr-2"
                onClick={() => {
                  if (currIndex === 0) {
                    setCurrIndex(properties.length - 3);
                  } else {
                    setCurrIndex((prev) => prev - 1);
                  }
                }}
              >
                <i className="bx bx-left-arrow-alt"></i>
              </div>
              <div
                className="flex p-[6px] md:p-[12px] rounded-full border-[1px] border-[#00000080] text-[#00000080] text-[24px] testimonyArrow"
                onClick={() => {
                  if (currIndex > properties.length - 4) {
                    setCurrIndex(0);
                  } else {
                    setCurrIndex((prev) => prev + 1);
                  }
                }}
              >
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </div>
          </div>

          <div className="leading-[67px] mt-5">
            <Button text={"View more properties"} href={"/"} lite={false} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertiesSection;
