import React from "react";

const NameInput = ({ register }: BillInputProps) => {
  return (
    <div className="form-control">
      <label className="label font-medium text-sm">
        <span className="label-text">
          Item Name <span className="text-error">*</span>
        </span>
      </label>
      <input
        type="text"
        className="input input-bordered"
        placeholder="What did you buy?"
        required
        {...register("name", { required: true })}
      />
    </div>
  );
};

export default NameInput;
