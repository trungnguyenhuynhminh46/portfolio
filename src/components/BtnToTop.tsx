import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import * as Scroll from "react-scroll";
import React from "react";

const BtnToTop = () => {
  const handleClick = () => {
    var scroll = Scroll.animateScroll;
    scroll.scrollToTop({
      smooth: "true",
      duration: 1500,
    });
  };
  return (
    <button
      className="h-[50px] w-[50px] rounded-full border-2 border-solid border-white flec justify-center items-center text-white fixed right-10 bottom-10"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
};

export default BtnToTop;
