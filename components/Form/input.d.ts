type RegisterInput = {
  register: UseFormRegister<BillItem>;
};

interface InputProps extends RegisterInput {
  name: string;
  placeholder: string;
  label: string;
  type?: string;
  required?: boolean;
  leftAddon?: string;
  className?: string;
}

interface TaxInputProps extends RegisterInput {
  setIsTaxModalOpen: (to: boolean) => void;
  isInvoice?: boolean;
}

interface ParticipantSelectProps extends RegisterInput {
  clearPayerSelection: () => void;
  selectEveryone: () => void;
}

interface PayerSelectProps extends RegisterInput {
  watch: UseFormWatch<BillItem>;
}
