import { useBillStore } from "@/services/hooks/useBillStore";
import React from "react";
import { FaPlus } from "react-icons/fa";

const TaxSelect = ({ register, setIsTaxModalOpen }: TaxInputProps) => {
  const { taxes } = useBillStore();
  return (
    <>
      <div className="form-control">
        <label className="label font-medium text-sm">Tax</label>
        <div className="input-group">
          <select
            className="select select-bordered flex-1"
            placeholder="How much was it?"
            {...register("tax")}
          >
            <option value="" disabled>
              Any tax applied?
            </option>
            {taxes.map((tax) => (
              <option value={tax.uid} key={tax.uid}>
                {tax.name} ({tax.rate}%)
              </option>
            ))}
          </select>
          <span onClick={() => setIsTaxModalOpen(true)} className="btn btn-secondary gap-2">
            <FaPlus />
            New Tax Rate
          </span>
        </div>
      </div>
    </>
  );
};

export default TaxSelect;
