import { useBillStore } from "./useBillStore";
import { usePeopleStore } from "./usePeopleStore";

const useSummary = () => {
  const { insertPaymentDue, insertSettlements } = usePeopleStore();
  const { bill, taxes } = useBillStore();

  const findTax = (uid: string): number => taxes.find((t) => t.uid == uid)?.rate ?? 0;

  const generateSummary = () => {
    const summary: Summary = {};
    const balances: Summary = {};
    let settlements: Settlement[] = [];
    for (let billItem of bill) {
      const subTotal = billItem.price * billItem.qty;
      const withTax = (subTotal * (findTax(billItem.tax ?? "") + 100)) / 100;

      // update payer's balance
      if (billItem.payer) balances[billItem.payer] = (balances[billItem.payer] ?? 0) + withTax;

      // update due
      const billAmount = withTax / billItem.payers.length;
      for (const participant of billItem.payers) {
        summary[participant] = (summary[participant] ?? 0) + billAmount;
      }
    }

    settleBalances(summary, balances, settlements);
    insertPaymentDue(summary);
    insertSettlements(settlements);
  };

  const settleBalances = (summary: Summary, balances: Summary, settlements: Settlement[]) => {
    const loan: Summary = {};
    const debt: Summary = {};
    for (const personId in summary) {
      const balance = (balances[personId] ?? 0) - summary[personId];
      if (balance > 0) loan[personId] = balance;
      else debt[personId] = balance;
    }

    const loanArray = Object.entries(loan);
    let i = 0;
    for (const [person, amount] of Object.entries(debt)) {
      let currentDebt = amount * -1;
      while (currentDebt > 0 && i < loanArray.length) {
        const unpaidAmount = loanArray[i][1];
        if (unpaidAmount > 0 && unpaidAmount >= currentDebt) {
          settlements.push({ from: person, to: loanArray[i][0], amount: currentDebt });
          loanArray[i][1] -= currentDebt;
          currentDebt = 0;
        } else if (unpaidAmount > 0 && unpaidAmount < currentDebt) {
          settlements.push({ from: person, to: loanArray[i][0], amount: unpaidAmount });
          currentDebt -= unpaidAmount;
          loanArray[i][1] = 0;
          i += 1;
        } else {
          i += 1;
        }
      }
      if (i == loanArray.length) break;
    }
  };

  return { generateSummary };
};

export default useSummary;
