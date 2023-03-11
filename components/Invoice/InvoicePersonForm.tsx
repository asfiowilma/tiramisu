import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";

type InvoicePersonFormProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  invoicePerson: InvoicePerson;
  isSender?: boolean;
};

const InvoicePersonForm = ({
  isModalOpen,
  closeModal,
  invoicePerson,
  isSender,
}: InvoicePersonFormProps) => {
  const { setSenderInfo, setRecipientInfo } = useInvoiceStore();
  const { register, handleSubmit } = useForm({ defaultValues: invoicePerson });

  const submitPerson = (data: InvoicePerson) => {
    if (isSender) setSenderInfo(data as SenderInfo);
    else setRecipientInfo(data as RecipientInfo);
    closeModal();
  };

  return (
    <div
      className={`modal modal-bottom sm:modal-middle ${isModalOpen && "modal-open"} `}
      onClick={closeModal}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="card-title">
          <FaUserAlt className="w-5 h-5" /> {isSender ? "Sender'" : "Recipient'"}s Info
        </div>
        <form onSubmit={handleSubmit(submitPerson)} className="pt-4">
          <div className="form-control">
            <label className="label font-medium text-sm">
              <span className="label-text">{isSender ? "Sender" : "Recipient"}/Company Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder={`Who is the ${isSender ? "sender" : "recipient"} of this invoice?`}
              {...register("entityName")}
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-sm">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder={`Enter the ${isSender ? "sender" : "recipient"}'s first and last name`}
              {...register("fullName")}
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-sm">
              <span className="label-text">Contact</span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder={`Enter the ${isSender ? "sender" : "recipient"}'s email/phone number`}
              {...register("contact")}
            />
          </div>
          <div className="modal-action">
            <button type="button" onClick={closeModal} className="btn btn-ghost">
              cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoicePersonForm;
