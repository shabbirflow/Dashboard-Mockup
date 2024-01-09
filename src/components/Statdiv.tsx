import { FC } from "react";

interface StatdivProps {}

const Statdiv: FC<StatdivProps> = ({}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <div className="stat-value text-2xl text-zinc-600 ">$19,892</div>
      <div className="stat-desc text-gray-500">Account Balance</div>

      <div className="flex md:flex-col gap-1 flex-row justify-between">
        <div className="flex flex-col py-1">
          <div className="stat-value text-xl text-zinc-600">$4,000</div>
          <div className="stat-desc text-gray-500 md:block hidden">
            Year-To-Date Contributions
          </div>
          <div className="stat-desc text-gray-500 md:hidden block">
            Year-To-Date
          </div>
        </div>
        <div className="flex flex-col py-1">
          <div className="stat-value text-xl text-zinc-600">$1,928</div>
          <div className="stat-desc text-gray-500">Total Interest</div>
        </div>
      </div>
    </div>
  );
};

export default Statdiv;
