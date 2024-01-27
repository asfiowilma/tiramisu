import React, { useCallback, useEffect, useRef, useState } from "react";

import Avatar from "boring-avatars";
import Credits from "../Credits";
import { HiShare } from "react-icons/hi";
import { IoReceipt } from "react-icons/io5";
import PersonIcon from "../People/PersonIcon";
import ReceiptTable from "./ReceiptTable";
import Settlements from "./Settlements";
import { toBlob } from "html-to-image";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import usePrint from "@/services/hooks/usePrint";

const IndividualReceipts = () => {
  const { people } = usePeopleStore();
  const [activeTab, setActiveTab] = useState(people.at(0)?.uid);
  const [activePerson, setActivePerson] = useState<Person>();
  const { ref, saveImage, isPrinting } = usePrint();

  useEffect(() => {
    if (activeTab) setActivePerson(people.find((p) => p.uid == activeTab));
  }, [activeTab]);

  return (
    <div className="overflow-hidden card bg-base-100 card-compact ms:card-normal">
      <div ref={ref} className="card-body bg-base-100">
        {isPrinting && (
          <>
            <div className="mt-3 divider ms:mt-0">
              <div className="flex flex-col">
                <div className="avatar">
                  <div className="mask mask-squircle">
                    <PersonIcon size={36} name={activePerson?.uid ?? ""} square />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="card-title">
          <IoReceipt className="w-5 h-5" /> {isPrinting ? `${activePerson?.name}'s` : "Individual"}{" "}
          Receipt{!isPrinting && "s"}
        </div>
        {!isPrinting && people.length > 0 && (
          <div className="mt-1 tabs tabs-boxed ms:mt-4">
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
        <ReceiptTable activeTab={activeTab ?? ""} />
        <Settlements settlements={activePerson?.settlement} />
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
  );
};

export default IndividualReceipts;
