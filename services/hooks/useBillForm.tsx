import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import { useBillStore } from "./useBillStore";

const useBillForm = () => {
  const { bill, activeBill } = useBillStore();
  const { people } = usePeopleStore();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (activeBill) {
      const b = bill.find((x) => x.uid == activeBill);
      setValue("uid", b?.uid);
      setValue("name", b?.name);
      setValue("desc", b?.desc);
      setValue("qty", b?.qty);
      setValue("price", b?.price);
      setValue("tax", b?.tax);
      setValue("payers", b?.payers);
    } else reset();
  }, [activeBill]);

  const selectEveryone = () => {
    setValue(
      "payers",
      people.map((p) => p.uid)
    );
  };

  const clearPayerSelection = () => {
    setValue("payers", []);
  };

  return { register, reset, errors, handleSubmit, setValue, clearPayerSelection, selectEveryone };
};

export default useBillForm;
