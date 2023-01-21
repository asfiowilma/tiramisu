import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";

const ReceiptMakerLayout = ({ children }: LayoutProps) => {
  const { activeApp, setActiveApp } = useNavigationStore();

  useEffect(() => {
    if (activeApp != "receipt-maker") setActiveApp("receipt-maker");
  }, [activeApp]);

  return (
    <>
      <Head>
        <title>Tiramisu | Receipt Maker</title>
      </Head>
      <Navbar />
      <main className="bg-base-200 min-h-screen p-6">{children}</main>
    </>
  );
};

export default ReceiptMakerLayout;
