import React, { MouseEventHandler, useEffect, useState } from "react";
import { HiDownload } from "react-icons/hi";

const InstallPWAButton = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const [promptInstall, setPromptInstall] = useState<any>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick: MouseEventHandler<HTMLButtonElement> = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <button
      className="btn btn-ghost text-primary-content"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      <HiDownload className="w-5 h-5 mr-1" /> Install App
    </button>
  );
};

export default InstallPWAButton;
