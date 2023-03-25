import Avatar from "boring-avatars";
import React from "react";

type PersonIconProps = {
  name: string;
  size?: number;
  square?: boolean;
};

const PersonIcon = ({ name, size = 32, square }: PersonIconProps) => {
  return (
    <Avatar
      size={size}
      name={name}
      variant="beam"
      square={square}
      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
    />
  );
};

export default PersonIcon;
