import React from "react";

type DividerProps = {
  hidden: boolean;
};

const Divider = ({ hidden }: DividerProps) => {
  if (hidden) return <></>;
  return (
    <div className="pt-1 my-3 border-b-2 border-dashed border-base-300">
      <div className="absolute w-6 h-6 -mt-3 rounded-full bg-base-300 -left-3"></div>
      <div className="absolute w-6 h-6 -mt-3 rounded-full bg-base-300 -right-3"></div>
    </div>
  );
};

export default Divider;
