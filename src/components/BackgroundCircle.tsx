import React from "react";
import { motion } from "framer-motion";

interface Props {}

const BackgroundCircle: React.FC<Props> = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className=" absolute border border-gray-700 rounded-[50%] h-[200px] w-[200px] mt-52 animate-ping" />
      <div className=" absolute border border-gray-700 rounded-[50%] h-[300px] w-[300px] mt-52" />
      <div className=" absolute border border-gray-700 rounded-[50%] h-[500px] w-[500px] mt-52" />
      <div className=" absolute border border-[#F7AB0A] rounded-[50%] h-[650px] w-[650px] mt-52 animate-pulse" />
      <div />
      <div className="absolute border border-gray-700 rounded-[50%] opacity-20 h-[650px] w-[650px] mt-52" />
    </div>
  );
};

export default BackgroundCircle;
