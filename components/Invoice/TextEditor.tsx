import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { useInvoiceStore } from "../../services/hooks/useInvoiceStore";

const TextEditor = ({ readonly }: { readonly: boolean }) => {
  const editor = useRef(null);
  const { invoiceTerms: content, setInvoiceTerms: setContent } = useInvoiceStore();

  const config = {
    preset: "inline",
    readonly: readonly,
    placeholder: "Insert invoice terms here",
    showPlaceholder: true,
  };

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
    />
  );
};

export default TextEditor;
