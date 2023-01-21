import React from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";

const PeopleBottomNav = () => {
  const { setActiveSplitBillStep } = useNavigationStore();
  const { people } = usePeopleStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-100 border-t border-t-base-200 shadow-lg dark:border-t-neutral z-20 flex">
      <div className="flex-1 p-4 flex justify-between items-center">
        <span>Registered</span>
        <span className="text-right text-lg font-medium text-accent">
          {people.length} {people.length > 1 ? "people" : "person"}
        </span>
      </div>
      <button
        onClick={() => setActiveSplitBillStep("bill")}
        className="btn btn-primary h-min py-4 pl-6 gap-3 pr-3 text-lg rounded-none"
      >
        Next <GoChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PeopleBottomNav;
