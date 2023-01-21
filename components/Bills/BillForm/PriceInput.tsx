import React from "react";

const PriceInput = ({ register }: BillInputProps) => {
  return (
    <div className="form-control col-span-2">
      <label className="label font-medium text-sm">
        <span className="label-text">
          Price <span className="text-error">*</span>
        </span>
      </label>
      <div className="input-group">
        <span>Rp</span>
        <input
          type="number"
          min={0}
          className="input input-bordered flex-1"
          placeholder="How much was it?"
          required
          {...register("price", { required: true, valueAsNumber: true })}
        />
      </div>
    </div>
  );
};

export default PriceInput;
