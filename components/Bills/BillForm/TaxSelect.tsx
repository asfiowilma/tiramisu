import { useBillStore } from "@/services/hooks/useBillStore";
import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";
import React from "react";
import { FaPlus } from "react-icons/fa";

const TaxSelect = ({ register, setIsTaxModalOpen, isInvoice }: TaxInputProps) => {
  const { taxes: billTaxes } = useBillStore();
  const { taxes: invoiceTaxes } = useInvoiceStore();

  const taxes = isInvoice ? invoiceTaxes : billTaxes;

  return (
    <>
      <div className="form-control">
        <label className="label font-medium text-sm">Tax</label>
        <div className="input-group">
          <select
            className="select select-bordered w-full flex-1"
            placeholder="How much was it?"
            {...register("tax")}
          >
            <option value="" disabled>
              Any tax applied?
            </option>
            {taxes.map((tax) => (
              <option value={tax.uid} key={tax.uid}>
                {tax.name} ({tax.rate}%)
              </option>
            ))}
          </select>
          <span onClick={() => setIsTaxModalOpen(true)} className="btn btn-secondary gap-2">
            <FaPlus />
            <div className="hidden sm:inline">New</div> Tax Rate
          </span>
        </div>
      </div>
    </>
  );
};

export default TaxSelect;
