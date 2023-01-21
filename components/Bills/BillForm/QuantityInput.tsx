import React from "react";

const QuantityInput = ({ register }: BillInputProps) => {
  return (
    <div className="form-control">
      <label className="label font-medium text-sm">
        <span className="label-text">
          Quantity <span className="text-error">*</span>
        </span>
      </label>
      <input
        type="number"
        min={0}
        className="input input-bordered"
        placeholder="How many?"
        required
        {...register("qty", { required: true, valueAsNumber: true })}
      />
    </div>
  );
};

export default QuantityInput;
