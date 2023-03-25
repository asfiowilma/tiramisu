import Head from "next/head";
import SplitBillLayout from "@/components/Layouts/SplitBillLayout";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";
import PeopleTab from "@/components/People";
import BillTab from "@/components/Bills";
import SummaryTab from "@/components/Summary";

export default function Home() {
  const { activeSplitBillStep } = useNavigationStore();

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

      <SplitBillLayout>
        {activeSplitBillStep == "people" && <PeopleTab />}
        {activeSplitBillStep == "bill" && <BillTab />}
        {activeSplitBillStep == "summary" && <SummaryTab />}
      </SplitBillLayout>
    </>
  );
}
