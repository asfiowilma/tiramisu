import React from "react";
import { HiReceiptTax } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { useBillStore } from "@/services/hooks/useBillStore";
import { v4 as uuid } from "uuid";

type TaxModalProps = {
  isTaxModalOpen: boolean;
  setIsTaxModalOpen: (to: boolean) => void;
};

const TaxModal = ({ isTaxModalOpen, setIsTaxModalOpen }: TaxModalProps) => {
  const { register, handleSubmit, reset } = useForm();
  const { addTaxRate } = useBillStore();

  const addNewRate = (data: FieldValues) => {
    const uid = uuid();
    addTaxRate({ ...(data as Tax), uid });
    reset();
    setIsTaxModalOpen(false);
  };

  return (
    <div
      className={`modal modal-bottom sm:modal-middle ${isTaxModalOpen && "modal-open"} `}
      onClick={() => setIsTaxModalOpen(false)}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="card-title">
          <HiReceiptTax className="w-5 h-5" /> New Tax Rate
        </div>
        <form onSubmit={handleSubmit(addNewRate)} className="pt-4">
          <div className="form-control">
            <input type="hidden" {...register("uid")} />
            <label className="label font-medium text-sm">
              <span className="label-text">
                Name <span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="Give a name to this tax rate"
              required
              {...register("name", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-sm">
              <span className="label-text">
                Tax Rate <span className="text-error">*</span>
              </span>
            </label>
            <div className="input-group">
              <input
                type="number"
                className="input input-bordered flex-1"
                placeholder="How much is the tax rate?"
                required
                {...register("rate", { required: true, valueAsNumber: true })}
              />
              <span>%</span>
            </div>
          </div>
          <div className="modal-action">
            <button
              type="button"
              onClick={() => setIsTaxModalOpen(false)}
              className="btn btn-ghost"
            >
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

export default TaxModal;
