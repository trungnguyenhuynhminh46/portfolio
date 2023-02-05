import React from "react";
import portfolioImage from "../assets/portfolio";
import { ProjectInfo } from "../share/types";
import PortfolioImages from "./PortfolioImages";

type Props = {
  portfolio: ProjectInfo;
};

const Project: React.FC<Props> = ({ portfolio }) => {
  return (
    <div className="relative h-[250px] rounded-lg overflow-hidden">
      {/* Background */}
      <PortfolioImages
        data={portfolio.imgsSrc}
        imgClass="absolute top-0 h-full object-cover object-center"
      />
      {/* Function */}
      <div className="group absolute -bottom-[60px] hover:bottom-0 left-0 right-0 h-[144px] flex flex-col items-start p-5 gap-2 bg-gradient-to-b from-gray-800/40 to-gray-800/40 transition-all duration-200 ease-linear hover:from-gray-900/80 hover:to-gray-500/30 hover:h-full hover:gap-3">
        <h1 className="text-xl font-bold">{portfolio.title}</h1>
        <div className="flex gap-5 flex-wrap">
          {portfolio.techs.map((tech, index) => {
            return (
              <span key={index} className="badge">
                {tech}
              </span>
            );
          })}
        </div>
        <p>{portfolio.about}</p>
        <div className="w-full flex justify-around group-hover:absolute group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:bottom-3">
          {portfolio.srcHref && (
            <a
              href={portfolio.srcHref}
              target="_blank"
              className="inline-block py-2 px-4 rounded transition-all duration-200 ease-linear bg-gray-900 text-white border border-transparent font-semibold hover:bg-transparent hover:border-gray-900"
            >
              Source
            </a>
          )}
          {portfolio.demoHref && (
            <a
              href={portfolio.demoHref}
              target="_blank"
              className="inline-block py-2 px-4 rounded transition-all duration-200 ease-linear bg-gray-900 text-white border border-transparent font-semibold hover:bg-transparent hover:border-gray-900"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
