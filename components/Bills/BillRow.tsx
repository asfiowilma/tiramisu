import React from "react";

import { HiPencil, HiTrash } from "react-icons/hi";
import PersonBadge from "../People/PersonBadge";
import EveryoneBadge from "../People/EveryoneBadge";
import formatCurrency from "@/services/utils/formatCurrency";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import { untaxed, useBillStore } from "@/services/hooks/useBillStore";
import { FaUserAlt } from "react-icons/fa";

const BillRow = ({
  uid,
  name,
  desc,
  tax: taxUid,
  price,
  qty,
  payers: payerUids,
  setIsModalOpen,
  isSummary = false,
}: BillRowProps) => {
  const { people } = usePeopleStore();
  const { taxes, setActiveBill, removeBillItem } = useBillStore();
  const isEveryone = payerUids.length == people.length;
  const payers = people.filter((p) => payerUids.includes(p.uid));
  const tax = taxes.find((t) => t.uid == taxUid);

  const editBill = () => {
    setActiveBill(uid);
    setIsModalOpen(true);
  };

  return (
    <>
      <tr>
        <td className="whitespace-normal flex flex-col">
          <div className="font-medium text-black dark:text-white">{name}</div>
          {desc && <p className="text-slate-400 max-w-[20ch] sm:max-w-max">{desc}</p>}
          {taxUid != untaxed.uid && (
            <p>
              Tax: {tax?.name} ({tax?.rate}%)
            </p>
          )}
          <div className="font-mono mt-1 text-black dark:text-white">
            Rp {formatCurrency(price)} x {qty}{" "}
            {isSummary && payers.length > 1 && (
              <span>
                / {payers.length} <FaUserAlt className="inline" />
              </span>
            )}
          </div>
        </td>
        <td className="dark:text-white">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <span>Rp</span>{" "}
              <span>
                {formatCurrency(
                  isSummary && payers.length > 1 ? (price * qty) / payers.length : price * qty
                )}{" "}
              </span>
            </div>
          </div>
        </td>
        {!isSummary && (
          <td>
            <div className="btn-group btn-group-vertical">
              <button onClick={editBill} className="btn btn-sm btn-ghost btn-square">
                <HiPencil className="w-5 h-5" />
              </button>
              <button
                onClick={() => removeBillItem(uid)}
                className="btn btn-sm btn-ghost btn-square text-error"
              >
                <HiTrash className="w-5 h-5" />
              </button>
            </div>
          </td>
        )}
      </tr>
      {!isSummary && (
        <tr>
          <td colSpan={3}>
            <div className="flex flex-wrap gap-1">
              {isEveryone ? (
                <EveryoneBadge people={people} />
              ) : (
                payers.map((person) => <PersonBadge key={person.uid} {...person} />)
              )}
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default BillRow;
