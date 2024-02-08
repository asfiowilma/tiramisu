import React, { useState } from "react";

import BillForm from "./BillForm";
import BillRow from "./BillRow";
import BillSummary from "./BillSummary";
import BottomNav from "../BottomNav";
import ConfirmationDialog from "../ConfirmationDialog";
import { FaPlus } from "react-icons/fa";
import { IoReceipt } from "react-icons/io5";
import { Step } from "../BottomNav";
import formatCurrency from "@/services/utils/formatCurrency";
import { useBillStore } from "@/services/hooks/useBillStore";

const BillTab = () => {
  const { bill, getTotal, setActiveBill, removeAllBillItem, removeAllTaxRates } = useBillStore();
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
      <div className="mt-6 mb-4 card compact bg-base-100 sm:mb-6">
        <div className="card-body">
          <div className="flex justify-between py-1 pl-4">
            <div className="card-title">
              <IoReceipt className="w-5 h-5" /> Bill
            </div>
            <div className="inline-flex">
              <div className="z-50 dropdown dropdown-end">
                <button tabIndex={0} title="Remove everything" className="btn btn-ghost btn-sm">
                  Reset
                </button>
                <ul
                  tabIndex={0}
                  className="w-40 p-2 shadow-lg dropdown-content menu bg-base-300 rounded-box"
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
          <div className="">
            <table className="table table-auto table-zebra table-sm xs:table-md">
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
                      <div className="flex flex-col items-center gap-2 text-center">
                        No item yet.
                        <button onClick={newItem} className="gap-2 btn btn-primary">
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
      <BottomNav
        nextStep={Step.summary}
        isNextDisabled={bill.length < 1}
        tooltipContent={bill.length == 0 ? "Add at least 1 item to the bill" : ""}
      >
        <span>Total</span>
        <span className="text-lg font-medium text-right text-accent">
          Rp {formatCurrency(getTotal())}
        </span>
      </BottomNav>
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
