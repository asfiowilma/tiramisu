import React from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { useBillStore } from "@/services/hooks/useBillStore";
import formatCurrency from "@/services/utils/formatCurrency";

const BillBottomNav = () => {
  const { getTotal } = useBillStore();
  const { setActiveSplitBillStep } = useNavigationStore();
  return (
    <div className="fixed bottom-0 inset-x-0 bg-base-100 border-t border-t-base-200 shadow-lg dark:border-t-neutral z-20 flex">
      <div className="flex-1 p-4 flex justify-between items-center">
        <span>Total</span>
        <span className="text-right text-lg font-medium text-accent">
          Rp {formatCurrency(getTotal())}
        </span>
      </div>
      <button
        onClick={() => setActiveSplitBillStep("summary")}
        className="btn btn-primary h-min py-4 pl-6 gap-3 pr-3 text-lg rounded-none"
      >
        Next <GoChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BillBottomNav;
