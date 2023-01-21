import Head from "next/head";
import SplitBillLayout from "@/components/Layouts/SplitBillLayout";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import PeopleTab from "@/components/People";
import BillTab from "@/components/Bills";
import SummaryTab from "@/components/Summary";
import Script from "next/script";

export default function Home() {
  const { activeSplitBillStep } = useNavigationStore();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A browser-based app for splitting bills and generating beautiful receipts/invoices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          async
          defer
          data-website-id="e565587e-a671-4caa-9f18-8bf12805d472"
          src="https://melanippe-umami.vercel.app/umami.js"
        ></Script>
      </Head>
      <SplitBillLayout>
        {activeSplitBillStep == "people" && <PeopleTab />}
        {activeSplitBillStep == "bill" && <BillTab />}
        {activeSplitBillStep == "summary" && <SummaryTab />}
      </SplitBillLayout>
    </>
  );
}
