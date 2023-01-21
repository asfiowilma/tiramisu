import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import React, { useEffect, useState } from "react";
import IndividualReceipts from "./IndividualReceipts";
import useSummary from "@/services/hooks/useSummary";
import EveryonesBill from "./EveryonesBill";
import { useBillStore } from "@/services/hooks/useBillStore";
import ConfirmationDialog from "../ConfirmationDialog";
import { useNavigationStore } from "@/services/hooks/useNavigationStore";

const SummaryTab = () => {
  const { setActiveSplitBillStep } = useNavigationStore();
  const { people, removeEveryone } = usePeopleStore();
  const { generateSummary } = useSummary();
  const { removeAllBillItem } = useBillStore();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const resetEverything = () => {
    removeAllBillItem();
    removeEveryone();
    setIsDialogOpen(false);
    setActiveSplitBillStep("people");
  };
  useEffect(() => {
    if (people.length > 0) generateSummary();
  }, []);

  return (
    <>
      <EveryonesBill resetEverything={() => setIsDialogOpen(true)} />
      <IndividualReceipts />
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

export default SummaryTab;
