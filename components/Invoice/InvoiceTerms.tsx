import React, { lazy, Suspense, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiClipboard } from "react-icons/hi";
const TextEditor = lazy(() => import("./TextEditor"));

const InvoiceTerms = ({ isPrinting }: Printable) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div
      className={`card card-compact sm:card-normal transition box-border border-2 ${
        isHidden
          ? "bg-transparent  border-base-content border-dashed opacity-75"
          : "bg-base-100 border-base-100"
      } ${isPrinting && isHidden ? "hidden" : ""}`}
    >
      <div className="card-body">
        <div className="justify-between card-title">
          <div className="inline-flex items-center gap-1">
            <HiClipboard className="w-6 h-6" /> Invoice Terms
          </div>
          <button
            onClick={() => setIsHidden(!isHidden)}
            title="Hide sender info"
            className={`swap btn btn-sm btn-ghost btn-square ${isHidden ? "" : "swap-active"} ${
              isPrinting ? "hidden" : ""
            }`}
          >
            <FaEye className="w-5 h-5 swap-on" />
            <FaEyeSlash className="w-5 h-5 swap-off" />
          </button>
        </div>
        <div
          className={`unreset prose prose-p:m-0 prose-p:pb-3 prose-headings:m-0 prose-headings:py-4 dark:prose-invert ${
            isPrinting ? "" : "textarea textarea-bordered"
          }`}
          placeholder="Insert invoice terms here"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <TextEditor readonly={isPrinting || isHidden} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTerms;
