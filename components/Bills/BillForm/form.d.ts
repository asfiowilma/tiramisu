interface BillInputProps {
  register: UseFormRegister<BillItem>;
}

interface TaxInputProps extends BillInputProps {
  setIsTaxModalOpen: (to: boolean) => void;
  isInvoice?: boolean;
}

interface PayerSelectProps extends BillInputProps {
  clearPayerSelection: () => void;
  selectEveryone: () => void;
}
