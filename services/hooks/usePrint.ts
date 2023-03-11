import { toBlob } from "html-to-image";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";

const usePrint = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const saveImage = useCallback(
    (filename: string) => {
      if (ref.current === null) return;

      setIsPrinting(true);
      toBlob(ref.current, { cacheBust: true })
        .then((fileData) => {
          const title = `tiramisu-${filename}-${Date.now()}.png`;
          const data = {
            files: [
              new File([fileData as Blob], title, {
                type: (fileData as Blob).type,
              }),
            ],
            title: title,
            text: title,
          };
          navigator.share(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setIsPrinting(false));
    },
    [ref]
  );

  return { isPrinting, setIsPrinting, ref, saveImage };
};

export default usePrint;
