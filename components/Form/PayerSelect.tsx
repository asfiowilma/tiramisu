import PersonBadge from "../People/PersonBadge";
import PersonIcon from "../People/PersonIcon";
import React from "react";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";

const PayerSelect = ({ register, watch }: PayerSelectProps) => {
  const { people } = usePeopleStore();

  return (
    <div className="form-control">
      <label className="text-sm font-medium label">Payer</label>
      <div className="input-group">
        <span>
          <PersonIcon name={watch("payer")} />
        </span>
        <select
          className="flex-1 w-full select select-bordered"
          placeholder="Who paid?"
          {...register("payer")}
        >
          <option value="">Who paid for this?</option>
          {people.map((person) => (
            <option value={person.uid} key={person.uid}>
              {person.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PayerSelect;
