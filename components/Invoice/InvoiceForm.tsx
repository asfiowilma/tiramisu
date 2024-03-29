import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { IoReceipt } from "react-icons/io5";
import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import { FieldValues } from "react-hook-form/dist/types";
import TaxModal from "../TaxModal";
import useInvoiceForm from "@/services/hooks/useInvoiceForm";
import TaxSelect from "../Form/TaxSelect";
import InputField from "../Form/InputField";

interface InvoiceFormProps {
  invoice?: InvoiceItem;
  isModalOpen: boolean;
  setIsModalOpen: (to: boolean) => void;
}

const InvoiceForm = ({ isModalOpen, setIsModalOpen }: InvoiceFormProps) => {
  const [isTaxModalOpen, setIsTaxModalOpen] = useState(false);
  const { activeInvoice, setActiveInvoice, addInvoiceItem, editInvoiceItem } = useInvoiceStore();
  const { register, handleSubmit, reset } = useInvoiceForm();

  useEffect(() => {
    if (!activeInvoice) reset();
  }, [activeInvoice]);

  const closeModal = () => {
    setActiveInvoice("");
    setIsModalOpen(false);
    reset();
  };

  const submitItem = (data: FieldValues) => {
    const uid = uuid();
    if (!activeInvoice) addInvoiceItem({ ...(data as InvoiceItem), uid });
    else editInvoiceItem(data.uid, data as InvoiceItem);
    reset();
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`modal modal-bottom sm:modal-middle ${isModalOpen && "modal-open"} `}
        onClick={closeModal}
      >
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <div className="card-title">
            <IoReceipt className="w-5 h-5" /> {activeInvoice ? "Edit" : "New"} Item
          </div>
          <form onSubmit={handleSubmit(submitItem)} className="pt-4">
            <InputField
              name="name"
              label="Item Name"
              placeholder="What did you buy?"
              required
              register={register}
            />
            <InputField
              type="textarea"
              name="desc"
              label="Description"
              placeholder="Care to describe?"
              register={register}
            />
            <div className="grid grid-cols-3 gap-4">
              <InputField
                name="qty"
                label="Quantity"
                placeholder="How many?"
                required
                register={register}
              />
              <InputField
                name="price"
                label="Price"
                placeholder="How much?"
                className="col-span-2"
                leftAddon="Rp"
                register={register}
              />
            </div>
            <TaxSelect isInvoice register={register} setIsTaxModalOpen={setIsTaxModalOpen} />
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
      <TaxModal isInvoice isTaxModalOpen={isTaxModalOpen} setIsTaxModalOpen={setIsTaxModalOpen} />
    </>
  );
};

export default InvoiceForm;
