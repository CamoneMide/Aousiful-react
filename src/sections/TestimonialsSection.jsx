import React from "react";
import { testimonials } from "../constants";

const TestimonialsSection = () => {
  const [crrIndex, setCrrIndex] = React.useState(0);

  function nextTestimonial() {
    if (crrIndex === testimonials.length - 1) {
      setCrrIndex(0);
    } else {
      setCrrIndex((prev) => prev + 1);
    }
  }
  function prevTestimonial() {
    if (crrIndex === 0) {
      setCrrIndex(testimonials.length - 1);
    } else {
      setCrrIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <section className="bg-[#EAF4E8] py-[100px]" id="testimonials">
        <div className="flex flex-col px-5 lg:px-10 interF font-[700]">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-[36px] md:text-[48px] leading-[67px] text-[#000000]">
              Testimonials
            </h2>
            <div className="flex flex-row mr-4 lg:mr-5">
              <div
                className="flex p-[6px] md:p-[12px] rounded-full border-[1px] border-[#00000080] text-[#00000080] text-[24px] mr-1"
                onClick={prevTestimonial}
              >
                <i className="bx bx-left-arrow-alt"></i>
              </div>
              <div
                className="flex p-[6px] md:p-[12px] rounded-full border-[1px] border-[#00000080] text-[#00000080] text-[24px] testimonyArrow"
                onClick={nextTestimonial}
              >
                <i className="bx bx-right-arrow-alt"></i>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-[60px] lg:grid-cols-3 mt-[12px] lg:mt-5"
            key={testimonials[crrIndex].id}
          >
            <div className="lg:col-span-2">
              <h4 className="text-[14px] md:text-[16px] lg:text-[20px] text-[#6F7B6ED6] leading-[25px] lg:leading-[38px] pb-[30px] testimonyText">
                {testimonials[crrIndex].text}
              </h4>
              <div className="">
                <h2 className="text-[20px] text-[#000000CC] testiCustName">
                  {testimonials[crrIndex].name}
                </h2>
                <h4 className="text-[18px] text-[#6F7B6E99] testiCustWork">
                  {testimonials[crrIndex].job}
                </h4>
              </div>
            </div>
            <div className="testimonyImgCont">
              <img
                className="w-full h-full object-cover rounded-[15px] testimonyImg"
                src={testimonials[crrIndex].src}
                alt={testimonials[crrIndex].alt}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
