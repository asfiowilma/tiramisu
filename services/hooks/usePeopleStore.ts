import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PeopleState {
  people: People;
  addPerson: (person: Person) => void;
  editPerson: (uid: string, person: Person) => void;
  insertPaymentDue: (summary: Summary) => void;
  removePerson: (uid: string) => void;
  removeEveryone: () => void;
}

export const usePeopleStore = create<PeopleState>()(
  persist(
    (set, get) => ({
      people: [],
      addPerson: (person) => set({ people: [...get().people, person] }),
      editPerson: (uid, person) =>
        set({ people: get().people.map((p) => (p.uid == uid ? person : p)) }),
      insertPaymentDue: (summary) =>
        set({ people: get().people.map((p) => ({ ...p, due: summary[p.uid] })) }),
      removePerson: (uid) => set({ people: [...get().people.filter((p) => p.uid != uid)] }),
      removeEveryone: () => set({ people: [] }),
    }),
    {
      name: "payer-store", // name of the item in the storage (must be unique)
    }
  )
);
