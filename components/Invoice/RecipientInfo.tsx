import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import InvoicePersonForm from "./InvoicePersonForm";

const RecipientInfo = ({ isPrinting }: Printable) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    recipientInfo,
    isRecipientHidden: isHidden,
    setIsRecipientHidden: setIsHidden,
  } = useInvoiceStore();

  return (
    <>
      <div
        className={`card card-compact transition box-border border-2 ${
          isHidden
            ? "bg-transparent  border-base-content border-dashed opacity-75"
            : "bg-base-100 border-base-100"
        }  ${isPrinting && isHidden ? "hidden" : ""}`}
      >
        <div className="card-body ">
          <div className="text-xs items-center uppercase font-medium flex justify-between">
            <span>To</span>
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                title="Edit recipient info"
                className="btn btn-sm btn-ghost btn-square"
              >
                <HiPencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsHidden(!isHidden)}
                title="Hide recipient info"
                className={`swap btn btn-sm btn-ghost btn-square ${isHidden ? "" : "swap-active"}`}
              >
                <FaEye className="swap-on w-5 h-5" />
                <FaEyeSlash className="swap-off w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-flex-col">
            <div className="font-bold">{recipientInfo?.entityName || "Company/Recipient Name"}</div>
            {recipientInfo?.fullName && <p>{recipientInfo?.fullName}</p>}
            {recipientInfo?.contact && <p>{recipientInfo?.contact}</p>}
          </div>
        </div>
      </div>
      <InvoicePersonForm
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        invoicePerson={recipientInfo}
      />
    </>
  );
};

export default RecipientInfo;
