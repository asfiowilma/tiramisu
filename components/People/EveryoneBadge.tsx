import PersonIcon from "./PersonIcon";
import React from "react";

const EveryoneBadge = ({ people }: PeopleProps) => {
  return (
    <div className="gap-1 pl-0 badge">
      <div className="-space-x-5 avatar-group">
        {people.map((person) => (
          <div key={person.uid} className="avatar">
            <PersonIcon name={person.uid} />
          </div>
        ))}
      </div>
      Everyone
    </div>
  );
};

export default EveryoneBadge;
