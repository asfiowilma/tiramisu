import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";

const SplitBillLayout = ({ children }: LayoutProps) => {
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
      <Navbar />
      <main className="bg-base-200 min-h-screen p-6">
        <ul className="steps w-full">
          <li
            onClick={() => setActiveSplitBillStep("people")}
            className="step cursor-pointer transition step-primary"
          >
            People
          </li>
          <li
            onClick={() => setActiveSplitBillStep("bill")}
            className={`step cursor-pointer transition ${
              activeSplitBillStep !== "people" && "step-primary"
            }`}
          >
            Bill
          </li>
          <li
            onClick={() => setActiveSplitBillStep("summary")}
            className={`step cursor-pointer transition ${
              activeSplitBillStep === "summary" && "step-primary"
            }`}
          >
            Summary
          </li>
        </ul>
        {children}
      </main>
    </>
  );
};

export default SplitBillLayout;
