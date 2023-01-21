import { useBillStore } from "@/services/hooks/useBillStore";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import formatCurrency from "@/services/utils/formatCurrency";
import Avatar from "boring-avatars";
import React from "react";

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
                    <Avatar
                      size={36}
                      name={person.uid}
                      variant="beam"
                      square
                      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />
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
