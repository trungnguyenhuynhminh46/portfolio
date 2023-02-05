import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";
// Styles
import "../styles/About.css";
import Head from "./Head";
import SubHead from "./SubHead";

interface Props {}

const About: React.FC<Props> = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="container mt-10" ref={ref}>
      <div
        className={`flex flex-col items-center gap-10 md:py-[100px] transition-all duration-1000 ease-linear ${
          isInView ? "translate-x-0 opacity-1" : "-translate-x-96 opacity-0"
        }`}
      >
        <Head>About me</Head>
        <SubHead>I'm a frontend developer</SubHead>
        <div className="flex flex-col items-center md:flex-row gap-14 shrink-0 w-full max-w-[900px]">
          <div className="flex flex-col gap-5">
            <p className="text-xl w-full max-w-[700px]">
              Hi, I'm Trung - a data engineering student at university of
              technology and education, I'm also a self-taught web developer. My
              desire is to create beautiful web interfaces in a creative,
              dynamic and equal environment.
              <br />
              Dedicated and hardworking Frontend Developer. Interested in
              learning new technology. I'm very eager to use my knowledge to
              make beautiful web interfaces with great features. I want to be a
              Fullstack developer one day so I try to learn new technology
              everyday.
              <br />
              Certification: TOEIC Reading & Listening 900
            </p>
            <div>
              <a
                href="/resume.pdf"
                className="py-2 px-4 rounded border border-solid border-white text-white bg-transparent mt-10 text-lg"
              >
                My resume
              </a>
            </div>
          </div>
          <div className="stage-cube-cont w-1/3 mt-[40px] md:mt-0">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faYarn} color="#2B8AB5" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
