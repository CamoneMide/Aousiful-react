import React from "react";

const FormInput = ({ label, type, icon1, icon2 }) => {
  // const [passType, setPassType] = React.useState(false);

  return (
    <>
      <label className="text-[16px] md:text-[20px] text-[#000000F2] font-[600] flex flex-col">
        {label}
        <div className="relative">
          <input
            name={type}
            type={type}
            placeholder={label}
            className="outline-none border-[1px] border-[#369536] px-[46px] py-[10px] rounded-[8px] text-[#00000066] w-full bg-[#fefef8]"
          />
          <i
            className={`${icon1} absolute text-[#00000066] left-[16px] top-[14px] text-[23px]`}
          ></i>
          <i
            className={`absolute text-[#00000066] cursor-pointer right-[16px] top-[14px] text-[23px] ${icon2}`}
          ></i>
        </div>
      </label>
    </>
  );
};

export default FormInput;
