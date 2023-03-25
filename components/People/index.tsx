import React, { useState } from "react";

import { FaUserAlt } from "react-icons/fa";
import Person from "@/components/People/PersonCard";

import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import PersonInput from "../Form/PersonInput";
import BottomNav, { Step } from "../BottomNav";
import ConfirmationDialog from "../ConfirmationDialog";

const PeopleTab = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { people, removeEveryone } = usePeopleStore();

  const confirmRemoveEveryone = () => {
    setIsDialogOpen(false);
    removeEveryone();
  };

  return (
    <>
      <div className="bg-base-100 mt-6 mb-4 xs:my-6 card card-compact xs:card-normal">
        <PersonInput />
      </div>
      <div className="card bg-base-100 card-compact xs:card-normal mb-14 sm:mb-6">
        <div className="card-body">
          <div className="card-title justify-between">
            <div className="card-title">
              <FaUserAlt className="w-5 h-5" /> People
            </div>
            <button
              onClick={() => setIsDialogOpen(true)}
              title="Remove everyone"
              className="btn btn-ghost btn-sm"
            >
              Remove All
            </button>
          </div>
          <div className="divide-y divide-base-300">
            {people.map((person) => (
              <Person key={person.uid} name={person.name} uid={person.uid} />
            ))}
            {people.length == 0 && (
              <div className="alert justify-center text-center">
                <div>
                  Nobody registered yet.
                  <br /> Add at least two people to continue~
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomNav
        nextStep={Step.bill}
        isNextDisabled={people.length < 2}
        tooltipContent={
          people.length == 0
            ? "Add at least 2 people to continue"
            : people.length == 1
            ? "Consider using invoice maker if there's only one person"
            : ""
        }
      >
        <span>Registered</span>
        <span className="text-right text-lg font-medium leading-tight text-accent">
          {people.length} {people.length > 1 ? "people" : "person"}
        </span>
      </BottomNav>
      <ConfirmationDialog
        message="Are you sure you want to remove everyone?"
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={confirmRemoveEveryone}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default PeopleTab;
