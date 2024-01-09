import { FC } from "react";

interface MidStatDivProps {}

const MidStatDiv: FC<MidStatDivProps> = ({}) => {
  return (
    <div className="w-full grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-2 gap-2 stats bg-slate-100 shadow-none">
      <div className="stat md:col-span-1 col-span-2 row-span-1">
        <div className="stat-desc text-zinc-500">My Goal</div>
        <div className="stat-value text-primary md:text-4xl text-2xl">
          $300,000
        </div>
        <hr className="my-2 border-blue-600 md:block hidden" />
      </div>
      <div className="stat">
        <div className="stat-desc text-zinc-500">Goal Achieved</div>
        <div className="stat-value text-primary md:text-4xl text-2xl">59%</div>
        <hr className="my-2 border-blue-600 md:block hidden" />
      </div>
      <div className="stat">
        <div className="stat-desc text-zinc-500">Est. Monthly Income</div>
        <div className="stat-value text-primary md:text-4xl text-2xl">
          {" "}
          $300
        </div>
        <hr className="my-2 border-blue-600 md:block hidden" />
      </div>
    </div>
  );
};

export default MidStatDiv;
