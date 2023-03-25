import React from "react";
import { IoReceipt } from "react-icons/io5";
import { HiShare } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import SummaryTable from "./SummaryTable";
import usePrint from "@/services/hooks/usePrint";

interface EveryonesBillProps {
  resetEverything: () => void;
}

const EveryonesBill = ({ resetEverything }: EveryonesBillProps) => {
  const { ref, isPrinting, saveImage } = usePrint();

  return (
    <div className="bg-base-100 mt-6 mb-4 xs:my-6 card card-compact ms:card-normal overflow-hidden">
      <div className="card-body bg-base-100" ref={ref}>
        <div className="card-title w-full">
          <IoReceipt className="w-5 h-5" /> Everyone&apos;s Bill
          {isPrinting && (
            <span className="flex-1 text-sm xs:text-base text-right text-gray-300 dark:text-gray-500">
              {new Date().toLocaleDateString()}
            </span>
          )}
        </div>
        <SummaryTable />
        <div
          className={`card-actions flex-col items-stretch xs:flex-row xs:items-start xs:self-end ${
            isPrinting && "hidden"
          }`}
        >
          <button
            onClick={resetEverything}
            className="btn btn-outline btn-error gap-2 umami--click--reset-everything"
          >
            <FaTrashAlt /> Reset Everything
          </button>
          <button
            onClick={() => saveImage("splitbill-everyone")}
            className="btn gap-2 btn-primary umami--click--share-everyones-bill"
          >
            <HiShare className="w-5 h-5" /> Share Bill
          </button>
        </div>
        {isPrinting && (
          <p className="text-center text-xs ms:text-sm font-mono text-gray-300 dark:text-gray-600">
            Generated with <br className="inline xs:hidden" /> Tiramisu Split Bill by Lyth
          </p>
        )}
      </div>
    </div>
  );
};

export default EveryonesBill;
