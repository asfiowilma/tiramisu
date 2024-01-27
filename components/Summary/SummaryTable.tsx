import { BiTransferAlt } from "react-icons/bi";
import PersonIcon from "../People/PersonIcon";
import React from "react";
import Settlements from "./Settlements";
import formatCurrency from "@/services/utils/formatCurrency";
import { useBillStore } from "@/services/hooks/useBillStore";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";

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
            <td className="whitespace-normal">
              <div className="flex items-center gap-3 break-all">
                <div className="avatar">
                  <div className="mask mask-squircle">
                    <PersonIcon size={36} name={person.uid} square />
                  </div>
                </div>
                <div className="max-w-[12ch] sm:max-w-max">{person.name}</div>
              </div>
              <Settlements settlements={person.settlement} isSummary />
            </td>
            <td>
              <div className="flex justify-between">
                <span>Rp</span>
                <span className="text-lg font-medium text-accent">
                  {formatCurrency(person.due ?? 0)}
                </span>
              </div>
            </td>
          </tr>
        ))}
        {people.length == 0 && (
          <tr>
            <td colSpan={2}>
              <div className="justify-center text-center card-body">
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
