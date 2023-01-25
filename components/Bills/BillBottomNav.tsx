import React from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { useBillStore } from "@/services/hooks/useBillStore";
import formatCurrency from "@/services/utils/formatCurrency";

const BillBottomNav = () => {
  const { bill, getTotal } = useBillStore();
  const { setActiveSplitBillStep } = useNavigationStore();
  return (
    <div className="fixed bottom-0 inset-x-0 bg-base-100 border-t border-t-base-200 dark:border-t-neutral z-20 flex sm:relative sm:bg-base-100 sm:rounded-box sm:border-none">
      <div className="flex-1 p-4 flex justify-between items-center">
        <span>Total</span>
        <span className="text-right text-lg font-medium text-accent">
          Rp {formatCurrency(getTotal())}
        </span>
      </div>
      <div
        className={`tooltip tooltip-left before:max-w-[200px] before:ms:max-w-[300px] before:sm:max-w-xs before:content-[attr(data-tip)] ${
          bill.length > 0 && "before:hidden after:hidden"
        }`}
        data-tip={bill.length == 0 ? "Add at least 1 item to the bill" : undefined}
      >
        <button
          disabled={bill.length < 1}
          onClick={() => setActiveSplitBillStep("summary")}
          className="btn btn-primary h-min py-4 pl-6 gap-3 pr-3 text-lg rounded-none sm:rounded-r-box"
        >
          Next <GoChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BillBottomNav;
