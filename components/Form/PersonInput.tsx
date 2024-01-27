import { FaUserAlt } from "react-icons/fa";
import { FieldValues } from "react-hook-form/dist/types";
import React from "react";
import { useForm } from "react-hook-form";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import { v4 as uuid } from "uuid";

const PersonInput = () => {
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
          <label className="pt-0 text-sm font-medium uppercase label label-text">
            Add New Person
          </label>
          <div className="join">
            <span className="grid px-4 join-item bg-base-200 place-items-center">
              <FaUserAlt />
            </span>
            <input type="hidden" {...register("uid")} />
            <input
              type="text"
              maxLength={20}
              placeholder="Enter person's name"
              className="flex-1 w-full join-item input input-bordered"
              {...register("name", { required: true })}
            />
            <button type="submit" className="join-item btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonInput;
