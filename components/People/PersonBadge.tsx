import PersonIcon from "./PersonIcon";
import React from "react";

const PersonBadge = ({ name, uid, isPayer }: PersonProps) => {
  return (
    <div className={`badge gap-1 pl-0 ${isPayer ? "badge-success" : ""}`}>
      <div className="avatar">
        <PersonIcon name={uid} />
      </div>
      <span className="max-w-[12ch] truncate">{name}</span>
    </div>
  );
};

export default PersonBadge;
