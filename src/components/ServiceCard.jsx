const ServiceCard = ({
  cardImgSrc,
  cardImgAlt,
  cardH2,
  cardText,
  custClassG,
}) => {
  return (
    <>
      <div className={`flex flex-col items-center ${custClassG}`}>
        <div>
          <img
            className="rounded-[12px] p-[45px] bg-[#369536]"
            src={cardImgSrc}
            alt={cardImgAlt}
          />
        </div>
        <div className="font-[700] interF pt-[20px]">
          <h2 className="text-[21px] leading-[67px] text-[#000000] text-center">
            {cardH2}
          </h2>
          <p className="text-[18px] leading-[33px] text-[#6F7B6ED6] text-center font-[500]">
            {cardText}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
