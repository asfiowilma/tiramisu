import React from "react";
import PersonIcon from "./PersonIcon";

const PersonBadge = ({ name, uid }: PersonProps) => {
  return (
    <div className="badge gap-1 pl-0">
      <div className="avatar">
        <PersonIcon name={uid} />
      </div>
      <span className="max-w-[12ch] truncate">{name}</span>
    </div>
  );
};

export default PersonBadge;
