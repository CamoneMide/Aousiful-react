import React from "react";
import { properties } from "../constants";
import { PropertyCard } from "../components";

const PropertiesSection = ({ currIndex, setCurrIndex }) => {
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
                left: `${index * 28}%`,
                position: "absolute",
              };

              return (
                <>
                  <PropertyCard
                    key={property.id}
                    name={property.name}
                    imgSrc={property.imgSrc}
                    imgAlt={property.imgAlt}
                    location={property.location}
                    price={property.price}
                    details={property.details}
                    myStyle={myStyle}
                  />
                </>
              );
            })}
          </div>
          <div className="flex flex-row justify-between w-full ">
            <div className="flex items-center w-full gap-[2px]">
              {properties.map((property, index) => {
                return (
                  <div
                    className={`flex  flex-row p-[6px] border-[2px] border-[#369536] rounded-full navTrans ${
                      currIndex === index ? "bg-[#369536]" : null
                    }`}
                    // style={{ transform: `translateX(${index * 100}%)` }}
                    key={property.id}
                  ></div>
                );
              })}
            </div>

            <div className="flex flex-row mr-4 lg:mr-10">
              <div
                className="flex p-[12px] rounded-full border-[1px] border-[#00000080] text-[#00000080] text-[24px] mr-5"
                onClick={() => {
                  if (currIndex === 0) {
                    setCurrIndex(properties.length - 2);
                  } else {
                    setCurrIndex((prev) => prev - 1);
                  }
                }}
              >
                <i className="bx bx-left-arrow-alt"></i>
              </div>
              <div
                className="flex p-[8px] md:p-[12px] rounded-full border-[1px] border-[#00000080] text-[#00000080] text-[24px] testimonyArrow"
                onClick={() => {
                  if (currIndex > properties.length - 1) {
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
            <a
              href=""
              className="text-[20px] font-[500] px-[26px] py-[13px] bg-[#369536] text-[#FDFDF3] rounded-[15px] border-[#369536] border-[1px]"
            >
              View more properties
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertiesSection;
