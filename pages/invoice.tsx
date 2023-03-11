import React from "react";
import Head from "next/head";
import InvoiceMakerLayout from "@/components/Layouts/InvoiceMakerLayout";
import SenderInfo from "@/components/Invoice/SenderInfo";
import RecipientInfo from "@/components/Invoice/RecipientInfo";
import InvoiceTable from "@/components/Invoice/InvoiceTable";
import InvoiceTerms from "@/components/Invoice/InvoiceTerms";
import usePrint from "@/services/hooks/usePrint";

const InvoiceMakerPage = () => {
  const { isPrinting, ref, saveImage } = usePrint();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A browser-based app for splitting bills and generating beautiful invoices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <InvoiceMakerLayout>
        <div ref={ref}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SenderInfo isPrinting={isPrinting} />
            <RecipientInfo isPrinting={isPrinting} />
          </div>
          <InvoiceTable isPrinting={isPrinting} />
          <InvoiceTerms isPrinting={isPrinting} />
        </div>
        <div className="flex justify-end">
          <div className="btn">Save Invoice</div>
        </div>
      </InvoiceMakerLayout>
    </>
  );
};

export default InvoiceMakerPage;
