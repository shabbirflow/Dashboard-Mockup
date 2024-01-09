import { FC } from "react";

interface TransProps {}

const Trans: FC<TransProps> = ({}) => {
  return (
    <div>
      <div>
        <h5 className="font-semibold my-3 text-black">Recent Transactions</h5>
      </div>
      <div>
        {transactions.map((x, ind) => {
          return (
            <div key={ind} className="md:my-3 my-2">
              <p className="text-sm">{x.date}</p>
              <p className="text-sm text-zinc-700 font-semibold">{x.trans}</p>
              <hr className="my-2 border-gray-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trans;

const transactions = [
  { date: "2020-08-07", trans: "Withdrawal Transfer to Bank-XX11" },
  { date: "2020-09-11", trans: "Withdrawal Transfer to Bank-XX45" },
  { date: "2020-10-17", trans: "Withdrawal Transfer to Bank-XX12" },
];
