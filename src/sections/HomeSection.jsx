import React from "react";
import { circleImages, showcaseSlides } from "../constants";

const HomeSection = ({ currentIndex }) => {
  const [searchTabActive, setSearchTabActive] = React.useState(false);

  function handleTabActiveToggle() {
    setSearchTabActive(!searchTabActive);
  }

  return (
    <>
      <section className="px-5 lg:px-10 lg:py-[60px] py-10" id="home">
        <div className="grid grid-cols-1 gap-[65px] lg:gap-5 lg:grid-cols-2 interF ">
          <div className="flex flex-col">
            <h2 className="lg:leading-[80px] lg:text-[76px] leading-[50px] text-[46px] italic font-[700] text-[#369536] flex flex-col">
              <span className="text-[#9dd144]">Find Your</span>Perfect Home
            </h2>
            <p className="container leading-[25px] lg:leading-[35px] text-[16px] lg:text-[18px] font-[600] text-[#6F7B6ED6] py-4 pb-[30px]">
              We offer a range of rentals tailored to fit your needs and
              lifestyle. With flexible options, fair pricing, and a friendly
              support team by your side, finding your next home is simple and
              stress free.
            </p>
            <div className="flex flex-row items-center justify-start mt-[25px] md:mt-[0px]">
              <div className="relative flex flex-row items-center justify-start w-full">
                {circleImages.map((circleImage, index) => {
                  const myStyle = {
                    transform: `translateX(${index * 70}%)`,
                    zIndex: { index },
                    // left: `${index * 70}%`,
                  };

                  return (
                    <img
                      key={circleImage.id}
                      className="absolute left-0"
                      src={circleImage.src}
                      alt={circleImage.alt}
                      style={myStyle}
                    />
                  );
                })}
              </div>
              <div className="text-[#FF8C00] hidden md:flex flex-row text-[22px] lg:-ml-[365px] md:-ml-[520px]">
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

          <div className="relative overflow-hidden h-[300px] md:h-[450px] lg:h-[531px] w-full rounded-[20px] flex">
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
                        <img
                          src="/src/assets/icons/locationIcon.png"
                          alt="locationIcon"
                        />
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
                        <img
                          src="/src/assets/icons/houseIcon.png"
                          alt="locationIcon"
                        />
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
                        <img
                          src="/src/assets/icons/moneyIcon.png"
                          alt="locationIcon"
                        />
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
