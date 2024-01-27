import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PeopleState {
  people: People;
  addPerson: (person: Person) => void;
  editPerson: (uid: string, person: Person) => void;
  getPerson: (uid: string) => Person | undefined;
  insertPaymentDue: (summary: Summary) => void;
  insertSettlements: (settlement: Settlement[]) => void;
  removePerson: (uid: string) => void;
  removeEveryone: () => void;
}

export const usePeopleStore = create<PeopleState>()(
  persist(
    (set, get) => ({
      people: [],
      addPerson: (person) => set({ people: [...get().people, person] }),
      getPerson: (uid) => get().people.find((p) => p.uid == uid),
      editPerson: (uid, person) =>
        set({ people: get().people.map((p) => (p.uid == uid ? person : p)) }),
      insertPaymentDue: (summary) =>
        set({ people: get().people.map((p) => ({ ...p, due: summary[p.uid] })) }),
      insertSettlements: (settlements) =>
        set({
          people: get().people.map((p) => ({
            ...p,
            settlement: settlements
              .filter((s) => s.from == p.uid)
              .reduce((result: Settlement[], settlement: Settlement) => {
                const existingEntry = result.find(
                  (entry) => entry.from === settlement.from && entry.to === settlement.to
                );

                if (existingEntry) existingEntry.amount += settlement.amount;
                else result.push(settlement);

                return result;
              }, []),
          })),
        }),
      removePerson: (uid) => set({ people: [...get().people.filter((p) => p.uid != uid)] }),
      removeEveryone: () => set({ people: [] }),
    }),
    {
      name: "payer-store", // name of the item in the storage (must be unique)
    }
  )
);
