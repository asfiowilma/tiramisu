import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuid } from "uuid";
import sum from "../utils/sum";

interface BillState {
  activeBill: string;
  bill: BillItem[];
  taxes: Tax[];
  setActiveBill: (uid: string) => void;
  addBillItem: (bill: BillItem) => void;
  editBillItem: (uid: string, bill: BillItem) => void;
  removeBillItem: (uid: string) => void;
  removeAllBillItem: () => void;
  removeAllTaxRates: () => void;
  addTaxRate: (tax: Tax) => void;
  getSubtotal: () => number;
  getTaxTotal: () => number;
  getTotal: () => number;
  getIndividualSubtotal: (uid: string) => number;
  getIndividualTaxTotal: (uid: string) => number;
  getIndividualTotal: (uid: string) => number;
}

export const untaxed: Tax = { name: "No Tax", rate: 0, uid: uuid() };

export const useBillStore = create<BillState>()(
  persist(
    (set, get) => ({
      activeBill: "",
      bill: [],
      taxes: [untaxed],
      setActiveBill: (uid) => set({ activeBill: uid }),
      addBillItem: (bill) => set({ bill: [...get().bill, bill] }),
      editBillItem: (uid, bill) => set({ bill: get().bill.map((b) => (b.uid == uid ? bill : b)) }),
      removeBillItem: (uid) => set({ bill: get().bill.filter((b) => b.uid != uid) }),
      addTaxRate: (tax) => set({ taxes: [...get().taxes, tax] }),
      removeAllBillItem: () => set({ bill: [] }),
      removeAllTaxRates: () =>
        set({
          taxes: [untaxed],
          bill: get().bill.map((b) => ({ ...b, tax: untaxed.uid })),
        }),
      getSubtotal: () => sum(get().bill.map((b) => b.price * b.qty)),
      getTaxTotal: () =>
        sum(
          get().bill.map(
            (b) => (b.price * b.qty * (get().taxes.find((t) => t.uid == b.tax)?.rate ?? 0)) / 100
          )
        ),
      getTotal: () => get().getSubtotal() + get().getTaxTotal(),
      getIndividualSubtotal: (uid) =>
        sum(
          get()
            .bill.filter((b) => b.payers.includes(uid))
            .map((b) =>
              b.payers.length > 1 ? (b.price * b.qty) / b.payers.length : b.price * b.qty
            )
        ),
      getIndividualTaxTotal: (uid) =>
        sum(
          get()
            .bill.filter((b) => b.payers.includes(uid))
            .map(
              (b) =>
                (b.price * b.qty * (get().taxes.find((t) => t.uid == b.tax)?.rate ?? 0)) /
                100 /
                (b.payers.length > 1 ? b.payers.length : 1)
            )
        ),
      getIndividualTotal: (uid) =>
        get().getIndividualSubtotal(uid) + get().getIndividualTaxTotal(uid),
    }),
    {
      name: "bill-store", // name of the item in the storage (must be unique)
    }
  )
);
