import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Trung",
      "I'm a front end Developer",
      "I build  aesthetic website",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="mx-auto">
        <BackgroundCircle />
        <img
          src="/cat.gif"
          alt=""
          className="relative rounded-[50%] h-32 w-32 mx-auto object-cover"
        />
        <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Front end developer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
