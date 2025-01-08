import React from "react";
import { motion, useTransform } from "framer-motion";
import Phrase from "./Phrase";

const Sidescroller = ({ left, progress, direction }) => {
  const dir = direction === "left" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-1250 * dir, 1250 * dir]);
  return (
    <>
      <motion.div
        className="relative flex whitespace-nowrap"
        style={{ left, translateX: x }}
      >
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        <Phrase />
        {/* <ul className="items-center scroller_inner bg-[#EAF4E8] py-[2px]">
          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 178.png" alt="Notion" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 179.png" alt="Google" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 181.png" alt="HighLand" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 180.png" alt="Flaticon" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/1969218 1.png" alt="VISA" />
          </li>

          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 178.png" alt="Notion" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 179.png" alt="Google" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 181.png" alt="HighLand" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/Frame 180.png" alt="Flaticon" />
          </li>
          <li className="w-[100px]">
            <img src="/src/assets/icons/1969218 1.png" alt="VISA" />
          </li>
        </ul> */}
      </motion.div>
    </>
  );
};

export default Sidescroller;
