type BillItem = {
  uid: string;
  name: string;
  desc?: string;
  tax?: string;
  qty: number;
  price: number;
  payers: string[];
};

type Tax = {
  uid: string;
  name: string;
  rate: number;
};

interface BillRowProps extends BillItem {
  setIsModalOpen: (to: boolean) => void;
  isSummary?: boolean;
}
