import React, { useEffect, useState } from "react";

import { BiTransferAlt } from "react-icons/bi";
import PersonBadge from "./People/PersonBadge";
import PersonIcon from "./People/PersonIcon";
import useLocalStorage from "@/services/hooks/useLocalStorage";
import { useWhatsNew } from "@/services/hooks/useWhatsNew";

const WhatsNewModal = () => {
  const { show, setShow } = useWhatsNew();
  const [seen, setSeen] = useLocalStorage("whats-new", false);

  useEffect(() => {
    if (!seen) setShow(true);
  }, []);

  const dismiss = () => {
    setShow(false);
    setSeen(true);
  };

  return (
    <dialog
      id="whats-new"
      className={`modal modal-bottom sm:modal-middle ${show ? "modal-open" : ""}`}
    >
      <div className="modal-box">
        <h2 className="text-lg font-bold sm:text-xl">What's New in Tiramisu</h2>
        <div className="my-2 divider"></div>
        <p className="badge badge-success">v0.2.0</p>
        <h3 className="font-bold sm:text-lg">✨ Who Paid?</h3>
        <div className="my-2 card card-compact bg-base-200">
          <div className="card-body">
            <div className="flex gap-2">
              <PersonBadge name="Croissant" uid="Croissants" />
              <div>
                Total spent Rp<span className="font-bold text-accent">120.000</span>
              </div>
            </div>
            <div className="flex items-center gap-2 pl-4 text-left tooltip tooltip-bottom">
              <BiTransferAlt size={20} />
              <div className="avatar mask mask-circle">
                <PersonIcon name="Baguette" square={false} size={24} />
              </div>
              <p>
                Transfer Rp
                <span className="font-medium text-secondary">40.000</span> to{" "}
                <span className="font-bold">Baguette</span>
              </p>
            </div>
            <div className="flex items-center gap-2 pl-4 text-left tooltip tooltip-bottom">
              <BiTransferAlt size={20} />
              <div className="avatar mask mask-circle">
                <PersonIcon name="RedVelvet" square={false} size={24} />
              </div>
              <p>
                Transfer Rp
                <span className="font-medium text-secondary">80.000</span> to{" "}
                <span className="font-bold">Red Velvet</span>
              </p>
            </div>
          </div>
        </div>
        <p>
          When multiple folks chip in for the bill, it's hard to keep track who owes who. Not
          anymore! Just jot down who paid, and we'll sort it out. Easy peasy!
        </p>
        <h3 className="pt-4 font-bold sm:text-lg">✨ Enhanced Controls</h3>
        <p className="py-2">
          We've added new controls to individual receipts, now you can toggle tax info and show/hide
          item details before sharing~
        </p>
        <p className="pt-2 font-medium">Misc Improvements:</p>
        <ul className="pt-1 pl-2">
          <li>💄 Minor theme makeover</li>
          <li>🐛 Bugfixes</li>
          <li>✏️ Fix typos and adjust copies</li>
        </ul>
        <div className="modal-action">
          <form method="dialog">
            <button
              onClick={dismiss}
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            >
              ✕
            </button>
            <button onClick={dismiss} className="btn btn-ghost">
              Cool
            </button>
            <button onClick={dismiss} className="uppercase btn btn-primary">
              Ayyy, Nice!
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={dismiss}>✕</button>
      </form>
    </dialog>
  );
};

export default WhatsNewModal;
