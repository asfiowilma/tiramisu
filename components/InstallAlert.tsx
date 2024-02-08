import React, { useEffect, useState } from "react";

import { BiInfoCircle } from "react-icons/bi";
import useLocalStorage from "@/services/hooks/useLocalStorage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let deferredPrompt: any;
const InstallAlert = () => {
  const [installable, setInstallable] = useState(false);
  const [seenPwaAlert, setSeenAlert] = useLocalStorage("seenPwaAlert", false);
  const dismissAlert = () => setSeenAlert(true);

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

  if (seenPwaAlert) return <></>;

  return (
    <div
      role="alert"
      className="flex flex-wrap items-center p-4 mt-6 gap-x-3 gap-y-2 sm:flex-nowrap bg-info text-info-content rounded-box"
    >
      <BiInfoCircle size={32} className="self-start flex-none" />
      <div className="flex-1">
        <h3 className="font-bold">Did you know you can install Tiramisu?</h3>
        <div className="text-xs">Install for easy access~ No internet, no problem!</div>
      </div>
      <div className="flex-none w-full text-right sm:w-max">
        <button type="button" onClick={dismissAlert} className="btn btn-sm btn-ghost">
          Dismiss
        </button>
        {installable && (
          <button type="button" onClick={install} className="btn btn-sm">
            Install
          </button>
        )}
      </div>
    </div>
  );
};

export default InstallAlert;
