import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Head from "./Head";
import SubHead from "./SubHead";
import skills from "../data/skills";

type Props = {};

const Skills = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="container mt-10" ref={ref}>
      <div
        className={`flex flex-col items-center gap-10 text-center py-[100px] transition-all duration-1000 ease-linear ${
          isInView ? "translate-x-0 opacity-1" : "-translate-x-96 opacity-0"
        }`}
      >
        <Head>Skills</Head>
        <SubHead>I have experience working with</SubHead>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 mt-10 shrink-0 w-full">
          {skills.map(({ id, srcImg, title, shadowColor }) => {
            return (
              <div
                key={id}
                className={`flex flex-col items-center space-y-4 rounded-lg shadow-md ${shadowColor} hover:scale-105 duration-300`}
              >
                <img src={srcImg} alt="" className="w-20 mx-auto" />
                <span className="text-lg text-white">{title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
