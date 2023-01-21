import React from "react";

const DescriptionInput = ({ register }: BillInputProps) => {
  return (
    <div className="form-control">
      <label className="label font-medium text-sm">Description</label>
      <textarea
        className="textarea textarea-bordered"
        placeholder="Care to describe?"
        {...register("desc")}
      />
    </div>
  );
};

export default DescriptionInput;
