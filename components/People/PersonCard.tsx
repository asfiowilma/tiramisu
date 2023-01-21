import React, { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import Avatar from "boring-avatars";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import { useForm } from "react-hook-form";
import ConfirmationDialog from "../ConfirmationDialog";

const Person = ({ name, uid }: PersonProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { editPerson, removePerson } = usePeopleStore();
  const { register, handleSubmit } = useForm({ defaultValues: { name, uid } });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const editPersonName = (data: Person) => {
    editPerson(uid, data);
    setIsEditing(false);
  };

  const confirmRemovePerson = () => {
    setIsDialogOpen(false);
    removePerson(uid);
  };

  return (
    <>
      <div className="flex items-center gap-4 py-1.5">
        <div className="avatar mask mask-squircle">
          <Avatar
            size={50}
            name={uid}
            variant="beam"
            square
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
        {!isEditing ? (
          <>
            <div className="flex-1">{name}</div>
            <div className="btn-group">
              <button
                onClick={() => setIsEditing(true)}
                className="btn btn-sm btn-ghost btn-square"
              >
                <HiPencil title={`Change ${name}'s name`} className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsDialogOpen(true)}
                className="btn btn-sm btn-ghost btn-square text-error"
              >
                <HiTrash title={`Delete ${name}`} className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSubmit(editPersonName)} className="flex flex-col gap-2 flex-1">
            <input
              type="text"
              placeholder="Enter person's name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            <div className="inline-flex self-end">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="btn btn-sm btn-ghost"
              >
                cancel
              </button>
              <button type="submit" className="btn btn-sm btn-primary">
                save
              </button>
            </div>
          </form>
        )}
      </div>
      <ConfirmationDialog
        message={`Are you sure you want to remove ${name}?`}
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={confirmRemovePerson}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default Person;
