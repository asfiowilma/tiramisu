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
      colors={["#92A1C6", "#439794", "#FDC160", "#C271B4", "#D9308A"]}
    />
  );
};

export default PersonIcon;
