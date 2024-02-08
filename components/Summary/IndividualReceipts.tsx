import React, { useEffect, useState } from "react";

import Credits from "../Credits";
import { HiShare } from "react-icons/hi";
import PersonIcon from "../People/PersonIcon";
import ReceiptTable from "./ReceiptTable";
import Settlements from "./Settlements";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import usePrint from "@/services/hooks/usePrint";
import Divider from "../Divider";
import IndividualSummaryControls from "./IndividualSummaryControls";

const IndividualReceipts = () => {
  const { people } = usePeopleStore();
  const [activeTab, setActiveTab] = useState(people.at(2)?.uid);
  const [activePerson, setActivePerson] = useState<Person>();
  const { ref, saveImage, isPrinting } = usePrint();
  const noSettlements =
    !activePerson?.settlement ||
    activePerson?.settlement.length == 0 ||
    activePerson?.settlement.every((s) => s.to == "groupFunds");

  useEffect(() => {
    if (activeTab) setActivePerson(people.find((p) => p.uid == activeTab));
  }, [activeTab]);

  return (
    <div ref={ref} className={isPrinting ? "p-4 bg-base-300" : "p-0"}>
      <div className="overflow-hidden card bg-base-100 card-compact ms:card-normal">
        <div className="card-body bg-base-100">
          <div className="card-title">
            <div className="avatar">
              <div className="mask mask-squircle">
                <PersonIcon size={36} name={activePerson?.uid ?? ""} square />
              </div>
            </div>{" "}
            {isPrinting ? `${activePerson?.name}'s` : "Individual"} Receipt{!isPrinting && "s"}
          </div>
          {!isPrinting && (
            <IndividualSummaryControls activeTab={activeTab} setActiveTab={setActiveTab} />
          )}
          <ReceiptTable activeTab={activeTab ?? ""} />
          <Divider hidden={!isPrinting || noSettlements} />
          <Settlements settlements={activePerson?.settlement} />
          <Divider hidden={!isPrinting} />
          <div
            className={`card-actions flex-col items-stretch sm:items-start sm:self-end ${
              isPrinting && "hidden"
            }`}
          >
            <button
              onClick={() => saveImage(`splitbill-${activePerson?.name}`)}
              className="h-auto gap-2 btn btn-primary umami--click--share-individual-bill"
            >
              <HiShare className="w-5 h-5" /> Share{" "}
              {(activePerson?.name.length ?? 0) < 12 && `${activePerson?.name}'s`} Bill
            </button>
          </div>
          {isPrinting && <Credits />}
        </div>
      </div>
    </div>
  );
};

export default IndividualReceipts;
