import React from "react";

const PropertyCard = ({
  name,
  imgSrc,
  imgAlt,
  location,
  price,
  details,
  myStyle,
}) => {
  return (
    <>
      <div
        className="font-[700] interF flex flex-col px-[12px] py-[15px] bg-[#F9F9F9] rounded-[12px] hsShadow w-[100%] md:w-[50%] lg:w-[25%] navTrans"
        style={myStyle}
      >
        <div className="rounded-[12px] h-[200px] overflow-hidden">
          <img
            className="w-full h-full rounded-[12px] object-cover hover:scale-[1.2] imgTrans"
            src={imgSrc}
            alt={imgAlt}
          />
        </div>
        <div className="flex flex-row items-start justify-between my-[12px]">
          <h2 className="text-[21px] leading-[21px] text-[#000000]">{name}</h2>
          <div className="text-[18px] p-[6px] border-[1px] border-[#6F7B6ED6] rounded-[8px] flex items-center text-[#6F7B6ED6]">
            <i className="bx bx-phone"></i>
          </div>
        </div>
        <h4 className="text-[20px] text-[#6F7B6ED6] pb-[10px]">{location}</h4>

        <div className="flex flex-row items-center justify-between pt-[20px] border-t-[1px] border-t-[#6F7B6ED6]">
          <h2 className="text-[20px] text-[#000000]">
            {`$${price}/`}
            <span className="text-[16px] text-[#6F7B6ED6]">month</span>
          </h2>
          <a className="text-[16px] text-[#369536]" href={details}>
            View Details
          </a>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
