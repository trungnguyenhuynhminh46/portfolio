import { useInView } from "framer-motion";
import React, { useRef } from "react";
import Project from "./Project";
import portfolios from "../data/projects";
import Head from "./Head";
import SubHead from "./SubHead";

type Props = {};

const Projects = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="container" ref={ref}>
      <div
        className={`flex flex-col items-center gap-10 text-center py-[100px] transition-all duration-1000 ease-linear ${
          isInView ? "translate-x-0 opacity-1" : "-translate-x-96 opacity-0"
        }`}
      >
        <Head>Projects</Head>
        <SubHead>Check out some of my work right here</SubHead>
        {/* Projects */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {portfolios.map((portfolio) => {
            return <Project key={portfolio.id} portfolio={portfolio} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
