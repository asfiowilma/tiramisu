import React, { useState } from "react";

import { IoReceipt } from "react-icons/io5";
import BillRow from "./BillRow";
import BillSummary from "./BillSummary";
import BillBottomNav from "./BillBottomNav";
import BillForm from "./BillForm";
import { useBillStore } from "@/services/hooks/useBillStore";
import { FaPlus } from "react-icons/fa";
import ConfirmationDialog from "../ConfirmationDialog";

const BillTab = () => {
  const { bill, setActiveBill, removeAllBillItem, removeAllTaxRates } = useBillStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const newItem = () => {
    setActiveBill("");
    setIsModalOpen(true);
  };

  const confirmReset = () => {
    removeAllBillItem();
    setIsDialogOpen(false);
  };

  return (
    <>
      <div className="card compact bg-base-100 mt-6 mb-4 sm:mb-6">
        <div className="card-body">
          <div className="flex py-1 pl-4 justify-between">
            <div className="card-title">
              <IoReceipt className="w-5 h-5" /> Bill
            </div>
            <div className="inline-flex">
              <div className="dropdown dropdown-end">
                <button tabIndex={0} title="Remove everything" className="btn btn-ghost btn-sm">
                  Reset
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow-lg bg-base-300 rounded-box w-40"
                >
                  <li onClick={() => setIsDialogOpen(true)}>
                    <a>Reset bill items</a>
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
            <table className="table table-auto table-zebra table-compact xs:table-normal">
              <thead>
                <tr>
                  <th className="w-full">Item Name</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {bill.map((billItem) => (
                  <BillRow key={billItem.uid} setIsModalOpen={setIsModalOpen} {...billItem} />
                ))}
                {bill.length === 0 && (
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
      <BillSummary />
      <BillBottomNav />
      <BillForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
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

export default BillTab;
