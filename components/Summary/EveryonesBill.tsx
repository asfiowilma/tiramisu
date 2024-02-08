import Credits from "../Credits";
import Divider from "../Divider";
import { FaTrashAlt } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { IoReceipt } from "react-icons/io5";
import React from "react";
import SummaryTable from "./SummaryTable";
import usePrint from "@/services/hooks/usePrint";

interface EveryonesBillProps {
  resetEverything: () => void;
}

const EveryonesBill = ({ resetEverything }: EveryonesBillProps) => {
  const { ref, isPrinting, saveImage } = usePrint();

  return (
    <div ref={ref} className={isPrinting ? "p-4 bg-base-300" : "p-0 mt-6 mb-4 xs:my-6"}>
      <div className="overflow-hidden bg-base-100 card card-compact ms:card-normal">
        <div className="card-body bg-base-100">
          <div className="w-full card-title">
            <IoReceipt className="w-5 h-5" /> Everyone&apos;s Bill
            {isPrinting && (
              <span className="flex-1 text-sm text-right text-gray-300 xs:text-base dark:text-gray-500">
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
              className="gap-2 btn btn-outline btn-error umami--click--reset-everything"
            >
              <FaTrashAlt /> Reset Everything
            </button>
            <button
              onClick={() => saveImage("splitbill-everyone")}
              className="gap-2 btn btn-primary umami--click--share-everyones-bill"
            >
              <HiShare className="w-5 h-5" /> Share Bill
            </button>
          </div>
          <Divider hidden={!isPrinting} />
          {isPrinting && <Credits />}
        </div>
      </div>
    </div>
  );
};

export default EveryonesBill;
