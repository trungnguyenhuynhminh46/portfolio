import React from "react";

type Props = {
  children: React.ReactNode;
};

const Head: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="tracking-[20px] text-gray-200 text-3xl uppercase font-secondary font-extrabold">
      {children}
    </h1>
  );
};

export default Head;
