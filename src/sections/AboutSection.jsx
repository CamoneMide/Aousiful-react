import { aboutSlides } from "../constants";

const AboutSection = ({ currentIndex }) => {
  return (
    <>
      <section className="px-5 py-[30px] lg:px-10 lg:py-[60px]" id="aboutUs">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[30px] mt-[20px] interF">
          <div className="relative flex w-full h-[300px] md:h-[450px] lg:h-[564px] overflow-hidden rounded-[20px]">
            {aboutSlides.map((aboutSlide, index) => {
              const myStyle = {
                transform: `translateX(-${currentIndex * 100}%)`,
                left: `${index * 100}%`,
              };
              return (
                <div
                  // className="absolute flex w-full h-full overflow-hidden navTrans imgSlide"
                  className="absolute w-full h-full overflow-hidden navTrans aboutImgSlide"
                  key={aboutSlide.id}
                  style={myStyle}
                >
                  <img
                    src={aboutSlide.src}
                    alt="about"
                    className="w-full h-full hover:scale-[1.2] imgTrans"
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col">
            <h2 className="lg:leading-[74px] leading-[45px] text-[46px] lg:text-[76px] italic font-[700] text-[#369536] flex flex-col">
              <span className="text-[#9dd144]">Your</span>New Adventure Starts
              Here
            </h2>
            <p className=" text-[16px] leading-[25px] lg:leading-[30px] lg:text-[18px] font-[600] text-[#6F7B6ED6] py-4 ">
              Immerse yourself in vibrant neighbourhoods and serene suburbs. Our
              properties offer the perfect blend of convenience and
              tranquillity. From bustling city centres to peaceful countryside
              retreats, we have the ideal space for you. Find your dream home
              and start living the life you deserve.
            </p>
            <p className=" text-[16px] leading-[25px] lg:leading-[30px] lg:text-[18px] font-[600] text-[#6F7B6ED6] pb-6">
              Find your new home with ease. We are here to provide you with the
              very best options and best of the experience.
            </p>
            <div className="leading-[67px]">
              <a
                href=""
                className="text-[20px] font-[500] px-[26px] py-[13px] bg-[#369536] text-[#FDFDF3] rounded-[15px] border-[#369536] border-[1px]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
