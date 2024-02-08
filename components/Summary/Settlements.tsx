import { BiTransferAlt } from "react-icons/bi";
import Divider from "../Divider";
import PersonBadge from "../People/PersonBadge";
import PersonIcon from "../People/PersonIcon";
import React from "react";
import formatCurrency from "@/services/utils/formatCurrency";
import { usePeopleStore } from "@/services/hooks/usePeopleStore";
import usePrint from "@/services/hooks/usePrint";

type SettlementsProps = {
  settlements: Person["settlement"];
  isSummary?: boolean;
};

const Settlements = ({ settlements, isSummary }: SettlementsProps) => {
  const { getPerson } = usePeopleStore();

  const getName = (uid: string) => {
    if (uid === "groupFunds") return "Group Funds";
    return getPerson(uid)?.name;
  };

  const noSettlements =
    !settlements || settlements.length == 0 || settlements.every((s) => s.to == "groupFunds");
  if (noSettlements) return <></>;
  return (
    <>
      <div className={`flex flex-col pl-3 break-words ${isSummary ? "" : "gap-2"}`}>
        {!isSummary && <div>Thank the homies for paying!</div>}
        {settlements.map((settlement) => (
          <div
            key={settlement.to}
            className="flex items-center gap-2 text-left tooltip tooltip-bottom"
            data-tip={`${getName(settlement.from)} transfers Rp${formatCurrency(
              settlement.amount
            )} to ${getName(settlement.to)}`}
          >
            <BiTransferAlt size={20} />
            <div className="avatar mask mask-circle">
              <PersonIcon name={settlement.to} square={false} size={isSummary ? 16 : 24} />
            </div>
            {isSummary ? (
              <p className="text-sm">
                <span className="flex-1">{getName(settlement.to)}: Rp</span>
                <span className="font-medium">{formatCurrency(settlement.amount)}</span>
              </p>
            ) : (
              <p>
                Transfer Rp
                <span className="font-medium text-secondary">
                  {formatCurrency(settlement.amount)}
                </span>{" "}
                to <span className="font-bold">{getName(settlement.to)}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Settlements;
