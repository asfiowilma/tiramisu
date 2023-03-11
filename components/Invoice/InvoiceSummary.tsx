import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import React from "react";
import formatCurrency from "@/services/utils/formatCurrency";

const InvoiceSummary = () => {
  const { getSubtotal, getTaxTotal, getTotal } = useInvoiceStore();

  return (
    <div className="card card-compact sm:card-normal bg-base-100 mb-14 sm:mb-6">
      <div className="card-body">
        <table className="table table-compact">
          <tbody>
            <tr>
              <th className="bg-base-300 rounded-t-lg">Subtotal</th>
              <td className="text-right">Rp {formatCurrency(getSubtotal())}</td>
            </tr>
            <tr>
              <th className="bg-base-300">Tax</th>
              <td className="text-right">Rp {formatCurrency(getTaxTotal())}</td>
            </tr>
            <tr>
              <th className="bg-base-300 rounded-b-lg">Total</th>
              <td className="text-right text-lg font-medium text-accent">
                Rp {formatCurrency(getTotal())}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceSummary;
