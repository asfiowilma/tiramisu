import { HiPencil, HiTrash } from "react-icons/hi";
import React, { useState } from "react";
import { untaxed, useBillStore } from "@/services/hooks/useBillStore";

import ConfirmationDialog from "../ConfirmationDialog";
import EveryoneBadge from "../People/EveryoneBadge";
import { FaUserAlt } from "react-icons/fa";
import PersonBadge from "../People/PersonBadge";
import formatCurrency from "@/services/utils/formatCurrency";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";

const BillRow = ({
  uid,
  name,
  desc,
  tax: taxUid,
  price,
  qty,
  payer,
  payers: payerUids,
  setIsModalOpen,
  isSummary = false,
}: BillRowProps) => {
  const { people, getPerson } = usePeopleStore();
  const { taxes, setActiveBill, removeBillItem } = useBillStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
        <td className="flex flex-col whitespace-normal">
          <div className="font-medium text-black dark:text-white">{name}</div>
          {desc && <p className="text-slate-400 max-w-[20ch] sm:max-w-max">{desc}</p>}
          {taxUid != untaxed.uid && (
            <p>
              Tax: {tax?.name} ({tax?.rate}%)
            </p>
          )}
          <div className="mt-1 font-mono text-black dark:text-white">
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
                onClick={() => setIsDialogOpen(true)}
                className="btn btn-sm btn-ghost btn-square text-error"
              >
                <HiTrash className="w-5 h-5" />
              </button>
            </div>
            <ConfirmationDialog
              message={`Are you sure you want to remove ${name}?`}
              onCancel={() => setIsDialogOpen(false)}
              onConfirm={() => removeBillItem(uid)}
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
            />
          </td>
        )}
      </tr>
      {!isSummary && (
        <tr>
          <td colSpan={3}>
            <div className="flex flex-wrap gap-1">
              {payer && <PersonBadge name={getPerson(payer)?.name ?? ""} uid={payer} isPayer />}
              {payer && <div className="divider divider-horizontal"></div>}
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
