import { accordions } from "../constants";
import { Accordion, Button } from "../components";
import contactShowcaseSrc from "/src/assets/images/home-showcase11.jpg";

const ContactSection = () => {
  return (
    <>
      <section className="px-5 py-[90px] lg:px-10" id="contact">
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] lg:text-[44px] lg:leading-[67px] leading-[48px] text-[#000000] font-[600]">
            Frequently Asked Questions
          </h2>
          <div className="lg:grid flex flex-col-reverse gap-[0] lg:gap-[50px] lg:grid-cols-2 mt-[30px] lg:-[50px]">
            <div className="flex flex-col items-start md:mt-[30px] lg:mt-[0]">
              <div className="h-[450px] w-full rounded-[15px] overflow-hidden hidden md:flex">
                <img
                  src={contactShowcaseSrc}
                  alt="showcase"
                  className="w-full h-full rounded-[15px] object-cover hover:scale-[1.2] imgTrans"
                />
              </div>

              <div className="leading-[67px] mt-10">
                <Button text={"Contact us"} href={""} lite={false} />
              </div>
            </div>

            <div>
              <div className="shfaq">
                {accordions.map((accordion) => {
                  return (
                    <Accordion
                      key={accordion.id}
                      head={accordion.head}
                      content={accordion.content}
                      state={accordion.state}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
