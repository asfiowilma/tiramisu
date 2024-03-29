import React from "react";

type ConfirmationDialogProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (to: boolean) => void;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const ConfirmationDialog = ({
  isDialogOpen,
  setIsDialogOpen,
  message,
  onConfirm,
  onCancel,
}: ConfirmationDialogProps) => {
  return (
    <div
      className={`modal modal-bottom sm:modal-middle ${isDialogOpen && "modal-open"} `}
      onClick={() => setIsDialogOpen(false)}
    >
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <p className="text-lg font-medium">{message}</p>
        <div className="modal-action">
          <button type="button" onClick={onCancel} className="btn btn-ghost">
            Nevermind
          </button>
          <button onClick={onConfirm} className="px-8 btn btn-primary">
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationDialog;
