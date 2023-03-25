import { toBlob } from "html-to-image";
import { useCallback } from "react";
import { useState } from "react";
import { useRef } from "react";

const usePrint = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isPrinting, setIsPrinting] = useState(false);

  const downloadImage = (fileData: Blob, fileName: string) => {
    const url = window.URL.createObjectURL(fileData);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  };

  const saveImage = useCallback(
    (filename: string, share?: boolean) => {
      if (ref.current === null) return;

      setIsPrinting(true);
      setTimeout(
        () =>
          toBlob(ref.current!, { cacheBust: true })
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
              if (share) {
                navigator.share(data);
              } else {
                downloadImage(fileData as Blob, title);
              }
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => setIsPrinting(false)),
        1
      );
    },
    [ref]
  );

  return { isPrinting, setIsPrinting, ref, saveImage };
};

export default usePrint;
