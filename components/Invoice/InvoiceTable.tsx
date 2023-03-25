import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoReceipt } from "react-icons/io5";
import ConfirmationDialog from "../ConfirmationDialog";
import InvoiceForm from "./InvoiceForm";
import InvoiceRow from "./InvoiceRow";
import InvoiceSummary from "./InvoiceSummary";

const InvoiceTable = ({ isPrinting }: Printable) => {
  const { invoiceItems, removeAllInvoiceItem, removeAllTaxRates, setActiveInvoice } =
    useInvoiceStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const newItem = () => {
    setActiveInvoice("");
    setIsModalOpen(true);
  };

  const confirmReset = () => {
    removeAllInvoiceItem();
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="card compact bg-base-100">
        <div className="card-body">
          <div className="flex py-1 pl-4 justify-between">
            <div className="card-title">
              <IoReceipt className="w-5 h-5" /> Invoice Details
            </div>
            <div className={`inline-flex ${isPrinting && "hidden"}`}>
              <div className="dropdown dropdown-end">
                <button tabIndex={0} title="Remove everything" className="btn btn-ghost btn-sm">
                  Reset
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-300 rounded-box w-40"
                >
                  <li onClick={() => setIsDialogOpen(true)}>
                    <a>Reset invoice items</a>
                  </li>
                  <li onClick={removeAllTaxRates}>
                    <a>Reset tax rates</a>
                  </li>
                </ul>
              </div>

              <button onClick={newItem} className="btn btn-sm btn-primary">
                Add
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="table table-auto  table-compact xs:table-normal">
              <thead>
                <tr>
                  <th className="w-full">Item Name</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((invoiceItem) => (
                  <InvoiceRow
                    key={invoiceItem.uid}
                    setIsModalOpen={setIsModalOpen}
                    isPrinting={isPrinting}
                    {...invoiceItem}
                  />
                ))}
                {invoiceItems.length === 0 && (
                  <tr>
                    <td colSpan={3}>
                      <div className="flex flex-col items-center text-center gap-2">
                        No item yet.
                        <button onClick={newItem} className="btn btn-primary gap-2">
                          <FaPlus className="w-4 h-4" />
                          Add Item
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <InvoiceSummary />
      <InvoiceForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ConfirmationDialog
        message="Are you sure you want to remove everything?"
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={confirmReset}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default InvoiceTable;
