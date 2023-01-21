import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { v4 as uuid } from "uuid";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import { FieldValues } from "react-hook-form/dist/types";

const AddPersonForm = () => {
  const { addPerson } = usePeopleStore();
  const { register, handleSubmit, reset } = useForm();

  const addNewPerson = (data: FieldValues) => {
    const uid = uuid();
    addPerson({ ...(data as Person), uid });
    reset();
  };

  return (
    <div className="card-body">
      <form onSubmit={handleSubmit(addNewPerson)} className="w-full">
        <div className="form-control">
          <label className="label label-text uppercase text-sm font-medium pt-0">
            Add New Person
          </label>
          <div className="input-group">
            <span>
              <FaUserAlt />
            </span>
            <input type="hidden" {...register("uid")} />
            <input
              type="text"
              maxLength={20}
              placeholder="Enter person's name"
              className="input input-bordered flex-1 w-full"
              {...register("name", { required: true })}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPersonForm;
