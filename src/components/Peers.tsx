import { ChevronDown } from "lucide-react";
import { FC } from "react";
import DonutChart from "./DonutChart";

interface PeersProps {}

const Peers: FC<PeersProps> = ({}) => {
  return (
    <div className="w-full h-full md:p-0 p-2">
      <h5 className="font-semibold text-blue-300">
        How do I compare to my peers ?
      </h5>
      <p className="text-xs">The numbers represent current goal achievement</p>
      <div className="w-full grid md:grid-cols-3 md:grid-rows-1 grid-rows-2 grid-cols-1">
        <div className=" flex flex-col gap-1 py-2">
          <div className="text-sm my-1 text-zinc-700 font-light flex flex-row">
            <span className="font-semibold mr-2">Age: </span> Under 30{" "}
            <DropDown />
          </div>
          <hr className=" border-gray-200 my-0.5" />
          <div className="text-sm my-1 text-zinc-700 font-light flex flex-row">
            <span className="font-semibold mr-2">Salary: </span> 20K to 30K{" "}
            <DropDown />
          </div>
          <hr className=" border-gray-200 my-0.5" />
          <div className="text-sm my-1 text-zinc-700 font-light flex flex-row">
            <span className="font-semibold mr-2">Gender: </span> Male{" "}
            <DropDown />
          </div>
          <hr className=" border-gray-200 my-0.5" />
        </div>
        <div className="col-span-2 grid grid-cols-3 md:gap-1 gap-2 ">
          {/* <DonutChart label="Average" green={78}/>
          <DonutChart label="Top" green={95}/>
          <DonutChart label="Me" green={59}/> */}
          <div className="">
            <DonutChart label="Average" green={78} />
          </div>
          <div className="">
            <DonutChart label="Top" green={95} />
          </div>
          <div className="">
            <DonutChart label="Me" green={59} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peers;

const DropDown = () => (
  <div className="dropdown dropdown-top md:dropdown-end dropdown-right mx-1">
    <div
      tabIndex={0}
      role="button"
      className="btn btn-xs p-0 m-0 h-4 font-bold btn-ghost"
    >
      <ChevronDown size={16} color="#1b221b" strokeWidth={2.5} />
    </div>
    <ul
      tabIndex={0}
      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <a className="text-slate-50">Item 1</a>
      </li>
      <li>
        <a className="text-slate-50">Item 2</a>
      </li>
    </ul>
  </div>
);
