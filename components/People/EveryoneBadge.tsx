import React from "react";
import Avatar from "boring-avatars";

const EveryoneBadge = ({ people }: PeopleProps) => {
  return (
    <div>
      <div className="badge gap-1 pl-0">
        <div className="avatar-group -space-x-5">
          {people.map((person) => (
            <div key={person.uid} className="avatar">
              <Avatar
                size={32}
                name={person.uid}
                variant="beam"
                colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </div>
          ))}
        </div>
        Everyone
      </div>
    </div>
  );
};

export default EveryoneBadge;
