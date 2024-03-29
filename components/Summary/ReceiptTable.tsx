import BillRow from "../Bills/BillRow";
import React from "react";
import formatCurrency from "@/services/utils/formatCurrency";
import { useBillStore } from "@/services/hooks/useBillStore";
import { useSummaryControlStore } from "@/services/hooks/useSummaryControls";

type ReceiptTableProps = {
  activeTab: string;
};

const ReceiptTable = ({ activeTab }: ReceiptTableProps) => {
  const { bill, getIndividualSubtotal, getIndividualTaxTotal, getIndividualTotal } = useBillStore();
  const { isShowTax } = useSummaryControlStore();

  return (
    <>
      <table className="table table-auto table-sm">
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
        </tbody>
      </table>
      <table className="table table-auto table-xs">
        {isShowTax && (
          <tbody>
            <tr>
              <td className="font-medium text-right uppercase">Subtotal</td>
              <td>
                <div className="flex justify-between">
                  <span>Rp</span>
                  <span>{formatCurrency(getIndividualSubtotal(activeTab ?? ""))}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="font-medium text-right uppercase">Tax</td>
              <td>
                <div className="flex justify-between">
                  <span>Rp</span>
                  <span>{formatCurrency(getIndividualTaxTotal(activeTab ?? ""))}</span>
                </div>
              </td>
            </tr>
          </tbody>
        )}
        <tfoot>
          <tr>
            <td className="w-full text-right uppercase">Total</td>
            <td>
              <div className="flex justify-between text-lg normal-case text-accent">
                <span>Rp</span>
                <span>{formatCurrency(getIndividualTotal(activeTab ?? ""))}</span>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ReceiptTable;
