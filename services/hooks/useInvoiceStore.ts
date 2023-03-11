import { create } from "zustand";
import { persist } from "zustand/middleware";
import sum from "../utils/sum";
import { untaxed } from "./useBillStore";

interface InvoiceState {
  invoiceItems: InvoiceItem[];
  activeInvoice: string;
  setActiveInvoice: (to: string) => void;
  addInvoiceItem: (item: InvoiceItem) => void;
  editInvoiceItem: (uid: string, item: InvoiceItem) => void;
  removeInvoiceItem: (uid: string) => void;
  removeAllInvoiceItem: () => void;
  taxes: Tax[];
  removeAllTaxRates: () => void;
  addTaxRate: (tax: Tax) => void;
  senderInfo: SenderInfo;
  isSenderHidden: boolean;
  setIsSenderHidden: (to: boolean) => void;
  setSenderInfo: (to: SenderInfo) => void;
  recipientInfo: RecipientInfo;
  isRecipientHidden: boolean;
  setIsRecipientHidden: (to: boolean) => void;
  setRecipientInfo: (to: RecipientInfo) => void;
  getSubtotal: () => number;
  getTaxTotal: () => number;
  getTotal: () => number;
}

export const useInvoiceStore = create<InvoiceState>()(
  persist(
    (set, get) => ({
      invoiceItems: [],
      taxes: [untaxed],
      senderInfo: { entityName: "" },
      recipientInfo: { entityName: "" },
      isSenderHidden: false,
      isRecipientHidden: false,
      activeInvoice: "",
      setActiveInvoice: (to) => set({ activeInvoice: to }),
      addInvoiceItem: (item) => set({ invoiceItems: [...get().invoiceItems, item] }),
      editInvoiceItem: (uid, item) =>
        set({ invoiceItems: get().invoiceItems.map((r) => (r.uid == uid ? item : r)) }),
      removeInvoiceItem: (uid) =>
        set({ invoiceItems: get().invoiceItems.filter((r) => r.uid != uid) }),
      removeAllInvoiceItem: () => set({ invoiceItems: [] }),
      addTaxRate: (tax) => set({ taxes: [...get().taxes, tax] }),
      removeAllTaxRates: () =>
        set({
          taxes: [untaxed],
          invoiceItems: get().invoiceItems.map((b) => ({ ...b, tax: untaxed.uid })),
        }),
      setSenderInfo: (to) => set({ senderInfo: to }),
      setRecipientInfo: (to) => set({ recipientInfo: to }),
      setIsSenderHidden: (to) => set({ isSenderHidden: to }),
      setIsRecipientHidden: (to) => set({ isRecipientHidden: to }),
      getSubtotal: () => sum(get().invoiceItems.map((b) => b.price * b.qty)),
      getTaxTotal: () =>
        sum(
          get().invoiceItems.map(
            (b) => (b.price * b.qty * (get().taxes.find((t) => t.uid == b.tax)?.rate ?? 0)) / 100
          )
        ),
      getTotal: () => get().getSubtotal() + get().getTaxTotal(),
    }),
    {
      name: "invoice-store", // name of the item in the storage (must be unique)
    }
  )
);
