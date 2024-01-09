import { FC } from "react";
import MidStatDiv from "./MidStatDiv";
import BarChart from "./BarChart";
import Peers from "./Peers";

interface MiddleProps {}

const Middle: FC<MiddleProps> = ({}) => {
  return (
    <div className=" p-1 md:p-7 w-full h-full grid md:grid-rows-7 grid-cols-1 gap-1 grid-rows-2">
      <div className=" md:row-span-2 row-span-1">
        <h5 className="font-semibold text-sm text-blue-800 my-2">
          Retirement Income{" "}
        </h5>
        <h3 className="text-2xl font-bold text-black m-0 p-0 pb-3">
          Starting Year 2056
        </h3>

        <MidStatDiv />
      </div>
      <div className="md:row-span-3 row-span-1 relative">
        <h3 className="text-2xl font-bold text-black my-1 p-0 pb-3">
          Contributions Overtime
        </h3>
        <div className="absolute inset-0 w-4/5 h-[80%] my-auto mx-auto overflow-hidden">
          <BarChart />
        </div>
      </div>

      <div className="md:row-span-2 md:block hidden">
        <Peers />
      </div>
    </div>
  );
};

export default Middle;

// const statArray = [
//   { value: "$300,000", desc: "My Goal" },
//   { value: "59%", desc: "Goal Achieved" },
//   { value: "$300", desc: "Est. Monthly Income" },
// ];
