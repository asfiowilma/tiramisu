import React, { useEffect } from "react";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import { useTheme } from "@/services/hooks/useTheme";

const InvoiceMakerLayout = ({ children }: LayoutProps) => {
  const { activeApp, setActiveApp } = useNavigationStore();
  const { darkMode } = useTheme();
  useEffect(() => {
    if (activeApp != "invoice-maker") setActiveApp("invoice-maker");
  }, [activeApp]);

  return (
    <>
      <Head>
        <title>Tiramisu | Invoice Maker</title>
      </Head>
      <div
        data-theme={darkMode ? "dark" : "light"}
        className="flex flex-col items-center min-h-screen bg-base-200 "
      >
        <Navbar />
        <main className="flex-1 w-full max-w-screen-sm px-2 py-6 ms:p-4 ms:pt-6 sm:p-6">
          {children}
        </main>
      </div>
    </>
  );
};

export default InvoiceMakerLayout;
