type InvoiceItem = {
  uid: string;
  name: string;
  desc?: string;
  tax?: string;
  qty: number;
  price: number;
};

type InvoicePerson = {
  entityName: string;
  fullName?: string;
  contact?: string;
};

type SenderInfo = InvoicePerson;
type RecipientInfo = InvoicePerson;

interface Printable {
  isPrinting: boolean;
}

interface InvoiceRowProps extends InvoiceItem, Printable {
  setIsModalOpen: (to: boolean) => void;
  isSummary?: boolean;
}
