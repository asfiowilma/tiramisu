import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiClipboard } from "react-icons/hi";

const InvoiceTerms = ({ isPrinting }: Printable) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div
      className={`card card-compact md:card-normal transition box-border border-2 ${
        isHidden
          ? "bg-transparent  border-base-content border-dashed opacity-75"
          : "bg-base-100 border-base-100"
      } ${isPrinting && isHidden ? "hidden" : ""}`}
    >
      <div className="card-body">
        <div className="card-title justify-between">
          <div className="inline-flex items-center gap-1">
            <HiClipboard className="w-6 h-6" /> Invoice Terms
          </div>
          <button
            onClick={() => setIsHidden(!isHidden)}
            title="Hide sender info"
            className={`swap btn btn-sm btn-ghost btn-square ${isHidden ? "" : "swap-active"}`}
          >
            <FaEye className="swap-on w-5 h-5" />
            <FaEyeSlash className="swap-off w-5 h-5" />
          </button>
        </div>
        <p contentEditable className="textarea textarea-bordered">
          Insert invoice terms here
        </p>
      </div>
    </div>
  );
};

export default InvoiceTerms;
