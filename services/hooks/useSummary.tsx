import React from "react";
import { useBillStore } from "./useBillStore";
import { usePeopleStore } from "./usePeopleStore";

const useSummary = () => {
  const { insertPaymentDue } = usePeopleStore();
  const { bill, taxes } = useBillStore();

  const findTax = (uid: string): number => taxes.find((t) => t.uid == uid)?.rate ?? 0;

  const generateSummary = () => {
    const summary: { [T in string]: number } = {};
    for (let billItem of bill) {
      const subTotal = billItem.price * billItem.qty;
      const withTax = (subTotal * (findTax(billItem.tax ?? "") + 100)) / 100;
      for (let payer of billItem.payers) {
        summary[payer] = (summary[payer] ?? 0) + withTax / billItem.payers.length;
      }
    }
    insertPaymentDue(summary);
  };

  return { generateSummary };
};

export default useSummary;
