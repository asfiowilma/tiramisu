import Avatar from "boring-avatars";
import React from "react";

const PersonBadge = ({ name, uid }: PersonProps) => {
  return (
    <div className="badge gap-1 pl-0">
      <div className="avatar">
        <Avatar
          size={32}
          name={uid}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      </div>
      <span className="max-w-[12ch] truncate">{name}</span>
    </div>
  );
};

export default PersonBadge;
