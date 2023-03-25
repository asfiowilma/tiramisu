import useBillForm from "@/services/hooks/useBillForm";
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { IoReceipt } from "react-icons/io5";
import TaxModal from "../TaxModal";
import PayerSelect from "../Form/PayerSelect";
import TaxSelect from "../Form/TaxSelect";
import { useBillStore } from "@/services/hooks/useBillStore";
import { FieldValues } from "react-hook-form/dist/types";
import InputField from "@/components/Form/InputField";

interface BillFormProps {
  bill?: BillItem;
  isModalOpen: boolean;
  setIsModalOpen: (to: boolean) => void;
}

const BillForm = ({ isModalOpen, setIsModalOpen }: BillFormProps) => {
  const [isTaxModalOpen, setIsTaxModalOpen] = useState(false);
  const { activeBill, setActiveBill, addBillItem, editBillItem } = useBillStore();
  const { register, handleSubmit, clearPayerSelection, selectEveryone, reset, errors } =
    useBillForm();

  useEffect(() => {
    if (!activeBill) reset();
  }, [activeBill]);

  const closeModal = () => {
    setActiveBill("");
    setIsModalOpen(false);
    reset();
  };

  const submitItem = (data: FieldValues) => {
    const uid = uuid();
    if (!activeBill) addBillItem({ ...(data as BillItem), uid });
    else editBillItem(data.uid, data as BillItem);
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
            <IoReceipt className="w-5 h-5" /> {activeBill ? "Edit" : "New"} Item
          </div>
          <form onSubmit={handleSubmit(submitItem)} className="pt-4">
            <InputField
              register={register}
              name="name"
              label="Item Name"
              placeholder="What did you buy?"
              required
            />
            <InputField
              register={register}
              type="textarea"
              name="desc"
              label="Description"
              placeholder="Care to describe?"
            />
            <div className="grid grid-cols-3 gap-4">
              <InputField
                register={register}
                type="number"
                name="qty"
                label="Quantity"
                placeholder="How many?"
                required
              />
              <InputField
                register={register}
                type="number"
                name="price"
                label="Price"
                placeholder="How much was it?"
                className="col-span-2"
                leftAddon="Rp"
                required
              />
            </div>
            <TaxSelect register={register} setIsTaxModalOpen={setIsTaxModalOpen} />
            <PayerSelect
              register={register}
              clearPayerSelection={clearPayerSelection}
              selectEveryone={selectEveryone}
            />
            {errors.payers && (
              <div className="alert alert-warning mt-4 text-center">
                Honey, somebody&apos;s gotta to pay for this.
              </div>
            )}
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
      <TaxModal isTaxModalOpen={isTaxModalOpen} setIsTaxModalOpen={setIsTaxModalOpen} />
    </>
  );
};

export default BillForm;
