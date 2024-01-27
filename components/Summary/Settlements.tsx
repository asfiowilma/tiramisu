import { BiTransferAlt } from "react-icons/bi";
import PersonBadge from "../People/PersonBadge";
import PersonIcon from "../People/PersonIcon";
import React from "react";
import formatCurrency from "@/services/utils/formatCurrency";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";

type SettlementsProps = {
  settlements: Person["settlement"];
  isSummary?: boolean;
};

const Settlements = ({ settlements, isSummary }: SettlementsProps) => {
  const { getPerson } = usePeopleStore();

  if (!settlements) return <></>;
  return (
    <div className={`flex flex-col pl-4 ${isSummary ? "" : "gap-2"}`}>
      {!isSummary && <p>Payments to be made</p>}
      {settlements.map((settlement) => (
        <div
          key={settlement.to}
          className="flex items-center gap-2 text-left tooltip tooltip-bottom"
          data-tip={`${getPerson(settlement.from)?.name} transfers Rp${formatCurrency(
            settlement.amount
          )} to ${getPerson(settlement.to)?.name}`}
        >
          {!isSummary && (
            <>
              <div className="avatar mask mask-circle">
                <PersonIcon name={settlement.from} square={false} size={isSummary ? 16 : 32} />
              </div>
              <span>{getPerson(settlement.from)?.name}</span>
            </>
          )}
          <BiTransferAlt size={isSummary ? 20 : 24} />
          <div className="avatar mask mask-circle">
            <PersonIcon name={settlement.to} square={false} size={isSummary ? 16 : 32} />
          </div>
          <p className={isSummary ? "text-sm" : "flex"}>
            <span className="flex-1">
              {getPerson(settlement.to)?.name}
              {isSummary && ": Rp"}
            </span>
            {!isSummary && <span>Rp</span>}
            <span className={`font-medium ${isSummary ? "" : "text-error"}`}>
              {formatCurrency(settlement.amount)}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Settlements;
