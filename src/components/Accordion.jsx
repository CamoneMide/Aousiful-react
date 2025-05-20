import React from "react";

const Accordion = ({ head, content, state, contClassG }) => {
  const [accState, setAccState] = React.useState(state);

  function accStateToggle() {
    setAccState((prev) => !prev);
  }

  return (
    <>
      <div
        className={`shAccordion border-t-[1px] border-t-[#00000080] ${contClassG}`}
      >
        <div
          className="flex flex-row justify-between items-center hAccHead font-[700] py-[20px] cursor-pointer"
          onClick={accStateToggle}
        >
          <h2 className="text-[18px] md:text-[22px] lg:text-[24px] text-[#000000E5]">
            {head}
          </h2>
          <div
            className={`p-[18px] rounded-full border-[1px] border-[#369536] relative dSpan z-[1] ${
              accState ? "dSpanShow" : null
            }`}
          >
            <span
              className={`rotate-180 z-[2] minusB ${
                accState ? "minusA" : null
              }`}
            >
              {" "}
            </span>
            <span
              className={`rotate-90 z-[2] minusB ${accState ? "minusA" : null}`}
            >
              {" "}
            </span>
          </div>
        </div>
        <div
          className={`hAccContent font-[500]  ${
            accState ? "hAcContShow" : null
          }`}
        >
          <div className="overflow-hidden">
            <p className="text-[18px] lg:text-[20px] text-[#6F7B6E] mb-5">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
