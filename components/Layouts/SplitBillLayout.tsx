import React, { useEffect } from "react";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useBillStore } from "@/services/hooks/useBillStore";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import { useSearchParams } from "next/navigation";

const SplitBillLayout = ({ children }: LayoutProps) => {
  const searchParams = useSearchParams();
  const hideNavbar = searchParams.get("hidenavbar");

  const { bill } = useBillStore();
  const { people } = usePeopleStore();
  const { activeApp, activeSplitBillStep, setActiveSplitBillStep, setActiveApp } =
    useNavigationStore();

  useEffect(() => {
    if (activeApp != "split-bill") setActiveApp("split-bill");
  }, [activeApp]);

  return (
    <>
      <Head>
        <title>Tiramisu | Split Bill</title>
      </Head>
      <div className="min-h-screen flex flex-col  items-center bg-base-200 ">
        {!hideNavbar && <Navbar />}
        <main
          className={`flex-1 px-2 py-6 ms:p-4 ms:pt-6 sm:p-6 max-w-screen-sm w-full ${
            hideNavbar ? "pt-10" : ""
          }`}
        >
          <ul className="steps w-full">
            <li
              onClick={() => setActiveSplitBillStep("people")}
              className="step cursor-pointer transition step-primary"
            >
              People
            </li>
            <li
              onClick={people.length < 2 ? () => {} : () => setActiveSplitBillStep("bill")}
              className={`step cursor-pointer transition ${
                activeSplitBillStep !== "people" && "step-primary"
              }`}
            >
              Bill
            </li>
            <li
              onClick={
                people.length < 2 && bill.length < 1
                  ? () => {}
                  : () => setActiveSplitBillStep("summary")
              }
              className={`step cursor-pointer transition ${
                activeSplitBillStep === "summary" && "step-primary"
              }`}
            >
              Summary
            </li>
          </ul>
          {children}
        </main>
      </div>
    </>
  );
};

export default SplitBillLayout;
