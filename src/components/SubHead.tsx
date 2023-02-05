import React from "react";

type Props = {
  children: React.ReactNode;
};

const SubHead: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="text-white text-center text-xl tracking-widest">
      {children}
    </h1>
  );
};

export default SubHead;
