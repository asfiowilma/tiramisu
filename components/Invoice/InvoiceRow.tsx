import React from "react";

import { HiPencil, HiTrash } from "react-icons/hi";
import formatCurrency from "@/services/utils/formatCurrency";
import { untaxed } from "@/services/hooks/useBillStore";
import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";

const InvoiceRow = ({
  uid,
  name,
  desc,
  tax: taxUid,
  price,
  qty,
  setIsModalOpen,
  isPrinting,
}: InvoiceRowProps) => {
  const { taxes, setActiveInvoice, removeInvoiceItem } = useInvoiceStore();
  const tax = taxes.find((t) => t.uid == taxUid);

  const editBill = () => {
    setActiveInvoice(uid);
    setIsModalOpen(true);
  };

  return (
    <tr>
      <td className="flex flex-col whitespace-normal">
        <div className="font-medium text-black dark:text-white">{name}</div>
        {desc && <p className="text-slate-400 max-w-[20ch] sm:max-w-max">{desc}</p>}
        {taxUid != untaxed.uid && (tax?.rate ?? 0) > 0 && (
          <p>
            Tax: {tax?.name} ({tax?.rate}%)
          </p>
        )}
        <div className="mt-1 font-mono text-black dark:text-white">
          Rp {formatCurrency(price)} x {qty}{" "}
        </div>
      </td>
      <td className="dark:text-white">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span>Rp</span> <span>{formatCurrency(price * qty)}</span>
          </div>
        </div>
      </td>
      {!isPrinting && (
        <td>
          <div className="btn-group btn-group-vertical">
            <button onClick={editBill} className="btn btn-sm btn-ghost btn-square">
              <HiPencil className="w-5 h-5" />
            </button>
            <button
              onClick={() => removeInvoiceItem(uid)}
              className="btn btn-sm btn-ghost btn-square text-error"
            >
              <HiTrash className="w-5 h-5" />
            </button>
          </div>
        </td>
      )}
    </tr>
  );
};

export default InvoiceRow;
