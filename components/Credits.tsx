import React from "react";

const Credits = () => {
  return (
    <p className="font-mono text-xs text-center text-gray-300 ms:text-sm dark:text-gray-600">
      Generated with <br className="inline xs:hidden" /> {window.location.hostname}
    </p>
  );
};

export default Credits;
