import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";

const InvoiceMakerLayout = ({ children }: LayoutProps) => {
  const { activeApp, setActiveApp } = useNavigationStore();

  useEffect(() => {
    if (activeApp != "invoice-maker") setActiveApp("invoice-maker");
  }, [activeApp]);

  return (
    <>
      <Head>
        <title>Tiramisu | Invoice Maker</title>
      </Head>
      <div className="min-h-screen flex flex-col  items-center bg-base-200 ">
        <Navbar />
        <main className="flex-1 px-2 py-6 ms:p-4 ms:pt-6 sm:p-6 max-w-screen-sm w-full">
          {children}
        </main>
      </div>
    </>
  );
};

export default InvoiceMakerLayout;
