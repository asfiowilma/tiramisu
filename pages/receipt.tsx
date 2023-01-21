import React from "react";
import Head from "next/head";
import ReceiptMakerLayout from "@/components/Layouts/ReceiptMakerLayout";
const ReceiptMakerPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A browser-based app for splitting bills and generating beautiful receipts/invoices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReceiptMakerLayout>Receipt Maker Page</ReceiptMakerLayout>
    </>
  );
};

export default ReceiptMakerPage;
