import React from "react";
import { scrollingImages } from "../constants";

const Phrase = () => {
  return (
    <>
      {scrollingImages.map((scrollingImage) => {
        return (
          <li className="w-[100px]" key={scrollingImage.id}>
            <img src={scrollingImage.src} alt={scrollingImage.alt} />
          </li>
        );
      })}
    </>
  );
};

export default Phrase;
