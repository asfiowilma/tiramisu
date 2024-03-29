import React from "react";
import formatCurrency from "@/services/utils/formatCurrency";
import { useBillStore } from "@/services/hooks/useBillStore";

const BillSummary = () => {
  const { getSubtotal, getTaxTotal, getTotal } = useBillStore();

  return (
    <div className="card card-compact sm:card-normal bg-base-100 mb-14 sm:mb-6">
      <div className="card-body">
        <table className="table table-sm">
          <tbody>
            <tr>
              <th className="rounded-t-lg bg-base-300">Subtotal</th>
              <td className="text-right">Rp {formatCurrency(getSubtotal())}</td>
            </tr>
            <tr>
              <th className="bg-base-300">Tax</th>
              <td className="text-right">Rp {formatCurrency(getTaxTotal())}</td>
            </tr>
            <tr>
              <th className="rounded-b-lg bg-base-300">Total</th>
              <td className="text-lg font-medium text-right text-accent">
                Rp {formatCurrency(getTotal())}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillSummary;
