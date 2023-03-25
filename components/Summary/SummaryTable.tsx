import { useBillStore } from "@/services/hooks/useBillStore";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import formatCurrency from "@/services/utils/formatCurrency";
import React from "react";
import PersonIcon from "../People/PersonIcon";

const SummaryTable = () => {
  const { people } = usePeopleStore();
  const { getTotal } = useBillStore();

  return (
    <table className="table table-compact">
      <thead>
        <tr>
          <th>Name</th>
          <th className="text-center">Due Total</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr key={person.uid}>
            <td className="whitespace-normal break-all">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle">
                    <PersonIcon size={36} name={person.uid} square />
                  </div>
                </div>
                <div className="max-w-[12ch] sm:max-w-max">{person.name}</div>
              </div>
            </td>
            <td className="flex justify-between">
              <span>Rp</span>{" "}
              <span className="text-lg text-accent font-medium">
                {formatCurrency(person.due ?? 0)}
              </span>
            </td>
          </tr>
        ))}
        {people.length == 0 && (
          <tr>
            <td colSpan={2}>
              <div className="card-body justify-center text-center">
                <span>Nobody registered yet.</span>
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td>total</td>
          <td className="flex justify-between">
            <span>Rp</span> <span>{formatCurrency(getTotal())}</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default SummaryTable;
