import { HiDownload, HiShare } from "react-icons/hi";
import React, { useState } from "react";
import StakeholderInfo, { Stakeholder } from "@/components/Invoice/StakeholderInfo";

import ConfirmationDialog from "@/components/ConfirmationDialog";
import Credits from "@/components/Credits";
import Head from "next/head";
import InvoiceMakerLayout from "@/components/Layouts/InvoiceMakerLayout";
import InvoiceTable from "@/components/Invoice/InvoiceTable";
import InvoiceTerms from "@/components/Invoice/InvoiceTerms";
import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import usePrint from "@/services/hooks/usePrint";

const InvoiceMakerPage = () => {
  const { removeAllInvoiceItem, setRecipientInfo, setSenderInfo, setInvoiceTerms } =
    useInvoiceStore();
  const { isPrinting, ref, saveImage } = usePrint();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const resetEverything = () => {
    removeAllInvoiceItem();
    setRecipientInfo({ entityName: "" });
    setSenderInfo({ entityName: "" });
    setInvoiceTerms("");
    setIsDialogOpen(false);
  };

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
        <div
          ref={ref}
          className={`w-full flex flex-col gap-4 bg-base-200 ${isPrinting ? "p-4" : "p-0"}`}
        >
          <div className="grid grid-cols-2 sm:gap-4 gap-1">
            <StakeholderInfo type={Stakeholder.sender} isPrinting={isPrinting} />
            <StakeholderInfo type={Stakeholder.recipient} isPrinting={isPrinting} />
          </div>
          <InvoiceTable isPrinting={isPrinting} />
          <InvoiceTerms isPrinting={isPrinting} />
          {isPrinting && <Credits />}
        </div>
        <div className="flex flex-col-reverse sm:flex-row justify-end mt-4 gap-2">
          <button
            onClick={() => setIsDialogOpen(true)}
            className="btn btn-outline btn-error gap-2 umami--click--reset-invoice"
          >
            Reset all
          </button>
          <button
            onClick={() => saveImage("invoice", true)}
            className="btn gap-2 umami--click--share-invoice"
          >
            <HiShare className="h-5 w-5" /> Share Invoice
          </button>
          <button
            onClick={() => saveImage("invoice")}
            className="btn btn-primary gap-2 umami--click--download-invoice"
          >
            <HiDownload className="h-5 w-5" /> Save Invoice
          </button>
        </div>
      </InvoiceMakerLayout>
      <ConfirmationDialog
        message="You want to start over?"
        onCancel={() => setIsDialogOpen(false)}
        onConfirm={resetEverything}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
};

export default InvoiceMakerPage;
