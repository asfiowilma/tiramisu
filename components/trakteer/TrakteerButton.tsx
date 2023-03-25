import React from "react";
import Image from "../Image";
import { useTrakteer } from "./TrakteerProvider";

type Props = {
  className: string;
  size?: number;
};

const TrakteerButton = ({ className, size = 100 }: Props) => {
  const { trakteerRef, setIsTrakteerOpen, isLoading, setIsLoading } = useTrakteer();

  const onButtonClick = () => {
    setIsLoading(true);
    setIsTrakteerOpen(true);
    trakteerRef.current.contentWindow.postMessage({ type: "embed.openModal" }, "*");
  };

  return (
    <button
      className={`rounded-full font-['Quicksand'] btn normal-case overflow-visible transition ${className}`}
      onClick={() => onButtonClick()}
    >
      <span className="animate-[trbtn-wiggle_3s_infinite] overflow-visible">
        <Image
          src="/choco-latte.png"
          alt="Traktiran"
          width={(21 * size) / 100}
          height={(26 * size) / 100}
        />
      </span>
      <span className="font-bold ml-1">{isLoading ? "Loading..." : "Buy me a Choco Latte"}</span>
    </button>
  );
};

export default TrakteerButton;
