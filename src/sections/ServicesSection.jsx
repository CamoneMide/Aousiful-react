import { serviceCards } from "../constants";
import { ServiceCard } from "../components";

const ServicesSection = () => {
  return (
    <>
      <section className="px-5 py-[90px] lg:px-10" id="services">
        <div className="flex flex-col items-center">
          <div className="font-[600] interF">
            <h2 className="text-[40px] lg:text-[44px] leading-[67px] text-[#000000] text-center">
              Our Services
            </h2>
            <h4 className="text-[18px] lg:text-[20px] text-[#6F7B6ED6] text-center">
              Our Services Are Designed to Make Finding Your ideal home simple
              and enjoyable
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-[60px] gap-10 lg:gap-10">
            {serviceCards.map((serviceCard) => {
              return (
                <ServiceCard
                  key={serviceCard.id}
                  cardImgSrc={serviceCard.cardImgSrc}
                  cardImgAlt={serviceCard.cardImgAlt}
                  cardH2={serviceCard.cardH2}
                  cardText={serviceCard.cardText}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
