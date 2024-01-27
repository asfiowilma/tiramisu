import PersonBadge from "@/components/People/PersonBadge";
import React from "react";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";

const ParticipantSelect = ({
  register,
  clearPayerSelection,
  selectEveryone,
}: ParticipantSelectProps) => {
  const { people } = usePeopleStore();
  return (
    <>
      <div className="my-6 text-lg divider">Who&apos;s supposed to pay for this?</div>
      <div className="w-full mb-4 btn-group">
        <button onClick={clearPayerSelection} type="button" className="flex-1 btn">
          Clear Selection
        </button>
        <button onClick={selectEveryone} type="button" className="flex-1 btn btn-secondary">
          Select Everyone
        </button>
      </div>
      <div className="form-control">
        <div className="grid grid-cols-1 ms:grid-cols-2 gap-x-4">
          {people.map((person) => (
            <label
              key={person.uid}
              htmlFor={`payer-${person.uid}`}
              className="cursor-pointer label"
            >
              <PersonBadge name={person.name} uid={person.uid} />
              <input
                id={`payer-${person.uid}`}
                type="checkbox"
                className="checkbox checkbox-secondary"
                value={person.uid}
                {...register("payers", { required: true })}
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default ParticipantSelect;
