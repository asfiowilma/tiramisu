import { useBillStore } from "@/services/hooks/useBillStore";
import formatCurrency from "@/services/utils/formatCurrency";
import React from "react";
import BillRow from "../Bills/BillRow";

type ReceiptTableProps = {
  activeTab: string;
};

const ReceiptTable = ({ activeTab }: ReceiptTableProps) => {
  const { bill, getIndividualSubtotal, getIndividualTaxTotal, getIndividualTotal } = useBillStore();

  return (
    <table className="table table-auto table-compact">
      <thead>
        <tr>
          <th className="w-full">Item Name</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {bill
          .filter((billItem) => billItem.payers.includes(activeTab ?? ""))
          .map((billItem) => (
            <BillRow key={billItem.uid} isSummary {...billItem} setIsModalOpen={(_) => {}} />
          ))}
        <tr>
          <td className="text-right uppercase font-medium">Subtotal</td>
          <td>
            <div className="flex justify-between">
              <span>Rp</span>
              <span>{formatCurrency(getIndividualSubtotal(activeTab ?? ""))}</span>
            </div>
          </td>
        </tr>
        <tr>
          <td className="text-right uppercase font-medium">Tax</td>
          <td>
            <div className="flex justify-between">
              <span>Rp</span>
              <span>{formatCurrency(getIndividualTaxTotal(activeTab ?? ""))}</span>
            </div>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td className="text-right">Total</td>
          <td>
            <div className="flex justify-between text-accent text-lg normal-case">
              <span>Rp</span>
              <span>{formatCurrency(getIndividualTotal(activeTab ?? ""))}</span>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ReceiptTable;
