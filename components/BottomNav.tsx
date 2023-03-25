import React from "react";
import { GoChevronRight } from "react-icons/go";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";

export enum Step {
  people = "people",
  bill = "bill",
  summary = "summary",
}

interface BottomNavProps {
  nextStep: Step;
  isNextDisabled: boolean;
  tooltipContent: string;
  children: React.ReactNode;
}

const BottomNav = ({ nextStep, children, isNextDisabled, tooltipContent }: BottomNavProps) => {
  const { setActiveSplitBillStep } = useNavigationStore();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-base-100 border-t border-t-base-200 dark:border-t-neutral z-20 flex sm:relative sm:bg-base-100 sm:rounded-box sm:border-none">
      <div className="flex-1 py-2 px-4 flex justify-between items-center">{children}</div>
      <div
        className={`tooltip tooltip-left before:max-w-[200px] before:ms:max-w-[300px] before:sm:max-w-xs before:content-[attr(data-tip)] ${
          !isNextDisabled && "before:hidden after:hidden"
        }`}
        data-tip={tooltipContent}
      >
        <button
          disabled={isNextDisabled}
          onClick={() => setActiveSplitBillStep(nextStep)}
          className="btn btn-primary h-min py-4 pl-6 gap-3 pr-3 text-lg rounded-none sm:rounded-r-box"
        >
          Next <GoChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
