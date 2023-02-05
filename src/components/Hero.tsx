import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import { Link } from "react-scroll";
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
        <div className="z-20 relative">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            Front end developer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold font-primary">
            <span>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link to="about" spy={true} smooth={true} duration={500}>
              <button className="hero_btn">About</button>
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              offset={100}
            >
              <button className="hero_btn">Skills</button>
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
            >
              <button className="hero_btn">Projects</button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={30}
            >
              <button className="hero_btn">Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
