import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { HiShare } from "react-icons/hi";
import { IoReceipt } from "react-icons/io5";
import { toBlob } from "html-to-image";
import ReceiptTable from "./ReceiptTable";
import Avatar from "boring-avatars";

const IndividualReceipts = () => {
  const { people } = usePeopleStore();
  const ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(people.at(0)?.uid);
  const [isPrinting, setIsPrinting] = useState(false);
  const [activePerson, setActivePerson] = useState<Person>();

  useEffect(() => {
    if (activeTab) setActivePerson(people.find((p) => p.uid == activeTab));
  }, [activeTab]);

  const saveImage = useCallback(() => {
    if (ref.current === null) return;

    setIsPrinting(true);
    toBlob(ref.current, { cacheBust: true })
      .then((fileData) => {
        const title = `tiramisu-splitbill-${activePerson?.name}-${Date.now()}.png`;
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
  }, [ref]);

  return (
    <div className="card bg-base-100 overflow-hidden">
      <div ref={ref} className="card-body bg-base-100">
        {isPrinting && (
          <>
            <div className="divider mt-0">
              <div className="flex flex-col">
                <div className="avatar">
                  <div className="mask mask-squircle">
                    <Avatar
                      size={36}
                      name={activePerson?.uid}
                      variant="beam"
                      square
                      colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="card-title">
          <IoReceipt className="w-5 h-5" /> {isPrinting ? `${activePerson?.name}'s` : "Individual"}{" "}
          Receipt{!isPrinting && "s"}
        </div>
        {!isPrinting && people.length > 0 && (
          <div className="tabs tabs-boxed mt-4">
            {people.map((person) => (
              <div
                className={`tab tab-lifted ${activeTab == person.uid && "tab-active"}`}
                key={person.uid}
                onClick={() => setActiveTab(person.uid)}
              >
                {person.name}
              </div>
            ))}
          </div>
        )}
        <ReceiptTable activeTab={activeTab ?? ""} />
        <div className={`card-actions self-end ${isPrinting && "hidden"}`}>
          <button onClick={saveImage} className="btn gap-2 btn-primary">
            <HiShare className="w-5 h-5" /> Share {activePerson?.name}'s Bill
          </button>
        </div>
        {isPrinting && (
          <p className="text-center text-sm font-mono text-gray-300 dark:text-gray-600">
            Generated with Tiramisu Split Bill by Lyth
          </p>
        )}
      </div>
    </div>
  );
};

export default IndividualReceipts;
