import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import InvoicePersonForm from "./InvoicePersonForm";

export enum Stakeholder {
  sender,
  recipient,
}

interface StakeholderInfoProps extends Printable {
  type: Stakeholder;
}

const StakeholderInfo = ({ type, isPrinting }: StakeholderInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    recipientInfo,
    isRecipientHidden,
    setIsRecipientHidden,
    senderInfo,
    isSenderHidden,
    setIsSenderHidden,
  } = useInvoiceStore();
  const isRecipient = type == Stakeholder.recipient;

  const data = isRecipient ? recipientInfo : senderInfo;
  const isHidden = isRecipient ? isRecipientHidden : isSenderHidden;
  const setIsHidden = isRecipient ? setIsRecipientHidden : setIsSenderHidden;

  return (
    <>
      <div
        className={`card card-compact transition box-border border-2 ${
          !(isRecipientHidden || isSenderHidden) || !isPrinting
            ? isRecipient
              ? "rounded-l-none"
              : "rounded-r-none"
            : "rounded-box"
        } sm:rounded-box ${
          isHidden
            ? "bg-transparent  border-base-content border-dashed opacity-75"
            : "bg-base-100 border-base-100"
        }  ${isPrinting && isHidden ? "hidden" : ""}`}
      >
        <div className="card-body ">
          <div className="text-xs items-center uppercase font-medium flex justify-between">
            <span>{isRecipient ? "To" : "From"}</span>
            <div className={isPrinting ? "hidden" : ""}>
              <button
                onClick={() => setIsModalOpen(true)}
                title={`Edit ${isRecipient ? "recipient" : "sender"} info`}
                className="btn btn-sm btn-ghost btn-square"
              >
                <HiPencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsHidden(!isHidden)}
                title={`Hide ${isRecipient ? "recipient" : "sender"} info`}
                className={`swap btn btn-sm btn-ghost btn-square ${isHidden ? "" : "swap-active"}`}
              >
                <FaEye className="swap-on w-5 h-5" />
                <FaEyeSlash className="swap-off w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="flex-flex-col">
            <div className="font-bold">
              {data?.entityName || `${isRecipient ? "Recipient" : "Sender"} Name`}
            </div>
            {data?.fullName && <p>{data?.fullName}</p>}
            {data?.contact && <p>{data?.contact}</p>}
          </div>
        </div>
      </div>
      <InvoicePersonForm
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        isSender={type == Stakeholder.sender}
        invoicePerson={data}
      />
    </>
  );
};

export default StakeholderInfo;
