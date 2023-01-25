import React from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";

const PeopleBottomNav = () => {
  const { setActiveSplitBillStep } = useNavigationStore();
  const { people } = usePeopleStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-100 border-t border-t-base-200 dark:border-t-neutral z-20 flex sm:relative sm:bg-base-100 sm:rounded-box sm:border-none">
      <div className="flex-1 py-2 px-4 flex justify-between items-center">
        <span>Registered</span>
        <span className="text-right text-lg font-medium leading-tight text-accent">
          {people.length} {people.length > 1 ? "people" : "person"}
        </span>
      </div>
      <div
        className={`tooltip tooltip-left before:max-w-[200px] before:ms:max-w-[300px] before:sm:max-w-xs before:content-[attr(data-tip)] ${
          people.length >= 2 && "before:hidden after:hidden"
        }`}
        data-tip={
          people.length == 0
            ? "Add at least 2 people to continue"
            : people.length == 1
            ? "Consider using receipt maker if there's only one person"
            : undefined
        }
      >
        <button
          disabled={people.length < 2}
          onClick={() => setActiveSplitBillStep("bill")}
          className="btn btn-primary h-min py-4 pl-6 gap-3 pr-3 text-lg rounded-none sm:rounded-r-box"
        >
          Next <GoChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default PeopleBottomNav;
