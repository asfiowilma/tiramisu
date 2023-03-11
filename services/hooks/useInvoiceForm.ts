import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useInvoiceStore } from "./useInvoiceStore";

const useInvoiceForm = () => {
  const { invoiceItems, activeInvoice } = useInvoiceStore();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (activeInvoice) {
      const b = invoiceItems.find((x) => x.uid == activeInvoice);
      setValue("uid", b?.uid);
      setValue("name", b?.name);
      setValue("desc", b?.desc);
      setValue("qty", b?.qty);
      setValue("price", b?.price);
      setValue("tax", b?.tax);
    } else reset();
  }, [activeInvoice]);

  return { register, reset, errors, handleSubmit, setValue };
};

export default useInvoiceForm;
