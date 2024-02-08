import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import { useSummaryControlStore } from "@/services/hooks/useSummaryControls";
import React from "react";

type IndividualSummaryControlsProps = {
  activeTab?: string;
  setActiveTab: (to: string) => void;
};

const IndividualSummaryControls = ({ activeTab, setActiveTab }: IndividualSummaryControlsProps) => {
  const { people } = usePeopleStore();
  const controls = useSummaryControlStore();

  return (
    <>
      {people.length > 0 && (
        <div className="tabs tabs-boxed">
          {people.map((person) => (
            <div
              className={`tab tab-lifted ${activeTab == person.uid && "tab-active"}`}
              key={person.uid}
              onClick={() => setActiveTab(person.uid)}
            >
              {person.name}
            </div>
          ))}
        </div>
      )}

      <div className="flex self-end gap-2">
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Show Details</span>
          <input
            type="checkbox"
            checked={controls.isShowDetails}
            onChange={controls.toggleShowDetails}
            className="toggle toggle-sm"
          />
        </label>
        <div></div>
        <label className="gap-2 cursor-pointer label">
          <span className="label-text">Show Tax</span>
          <input
            type="checkbox"
            checked={controls.isShowTax}
            onChange={controls.toggleShowTax}
            className="toggle toggle-sm"
          />
        </label>
      </div>
    </>
  );
};

export default IndividualSummaryControls;
