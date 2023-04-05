import React from "react";

type BlobProps = {
  className?: string;
  transform?: string;
  fill?: string;
};

const Blob = ({ className, transform, fill }: BlobProps) => {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={fill ?? "#F2F4F8"}
        d="M28.8,-43C35,-40.9,36,-28.9,41,-18.6C46,-8.2,54.9,0.5,57.2,10.7C59.6,20.9,55.3,32.5,46.6,37.8C38,43,24.9,41.8,15.2,38.5C5.5,35.2,-0.8,29.8,-8.8,28.3C-16.8,26.7,-26.5,29,-36.8,26.6C-47.2,24.2,-58.2,17.1,-60.3,8.2C-62.3,-0.7,-55.4,-11.4,-49.5,-22C-43.7,-32.5,-39,-43,-31,-44.2C-22.9,-45.3,-11.4,-37.3,-0.1,-37.2C11.3,-37.1,22.7,-45,28.8,-43Z"
        transform={transform ?? "translate(100 -15) scale(2)"}
      />
    </svg>
  );
};

export default Blob;
