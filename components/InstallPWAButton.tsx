import React, { useEffect, useState } from "react";

import { HiDownload } from "react-icons/hi";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let deferredPrompt: any;
const InstallPWAButton = () => {
  const [installable, setInstallable] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      // e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      setInstallable(true);
    });
  }, []);

  const install = () => {
    // Hide the app provided install promotion
    setInstallable(false);
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  };

  if (!installable) {
    return null;
  }
  return (
    <button
      className="btn btn-ghost text-primary-content"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={install}
    >
      <HiDownload className="w-5 h-5 mr-1" /> Install App
    </button>
  );
};

export default InstallPWAButton;
