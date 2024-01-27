import { FaPlus } from "react-icons/fa";
import React from "react";
import { useBillStore } from "@/services/hooks/useBillStore";
import { useInvoiceStore } from "@/services/hooks/useInvoiceStore";

const TaxSelect = ({ register, setIsTaxModalOpen, isInvoice }: TaxInputProps) => {
  const { taxes: billTaxes } = useBillStore();
  const { taxes: invoiceTaxes } = useInvoiceStore();

  const taxes = isInvoice ? invoiceTaxes : billTaxes;

  return (
    <>
      <div className="form-control">
        <label className="text-sm font-medium label">Tax</label>
        <div className="join">
          <select
            className="flex-1 w-full join-item select select-bordered"
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
          <span
            onClick={() => setIsTaxModalOpen(true)}
            className="gap-2 join-item btn btn-secondary"
          >
            <FaPlus />
            Tax Rate
          </span>
        </div>
      </div>
    </>
  );
};

export default TaxSelect;
