import PersonBadge from "@/components/People/PersonBadge";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import React from "react";

const PayerSelect = ({ register, clearPayerSelection, selectEveryone }: PayerSelectProps) => {
  const { people } = usePeopleStore();
  return (
    <>
      <div className="divider text-lg my-6">Who's paying for this?</div>
      <div className="btn-group w-full mb-4">
        <button onClick={clearPayerSelection} type="button" className="btn flex-1">
          Clear Selection
        </button>
        <button onClick={selectEveryone} type="button" className="btn flex-1 btn-secondary">
          Select Everyone
        </button>
      </div>
      <div className="form-control">
        <div className="grid grid-cols-2 gap-x-4">
          {people.map((person) => (
            <label
              key={person.uid}
              htmlFor={`payer-${person.uid}`}
              className="label cursor-pointer"
            >
              <PersonBadge name={person.name} uid={person.uid} />
              <input
                id={`payer-${person.uid}`}
                type="checkbox"
                className="checkbox checkbox-secondary"
                value={person.uid}
                {...register("payers")}
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default PayerSelect;
