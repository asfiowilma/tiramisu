import React from "react";
import PersonIcon from "./PersonIcon";

const EveryoneBadge = ({ people }: PeopleProps) => {
  return (
    <div>
      <div className="badge gap-1 pl-0">
        <div className="avatar-group -space-x-5">
          {people.map((person) => (
            <div key={person.uid} className="avatar">
              <PersonIcon name={person.uid} />
            </div>
          ))}
        </div>
        Everyone
      </div>
    </div>
  );
};

export default EveryoneBadge;
