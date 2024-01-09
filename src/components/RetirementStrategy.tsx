import { FC } from "react";

interface RetirementStrategyProps {}

const RetirementStrategy: FC<RetirementStrategyProps> = ({}) => {
  return (
    <div className="card bg-slate-200 shadow-sm md:m-2 m-1 w-full md:w-4/5">
      <div className="card-body">
        {/* <h2 className="card-title">Card title!</h2> */}
        <h5 className="text-xl font-semibold text-zinc-800 card-title">
          Retirement Strategy
        </h5>
        <h6 className="text-sm text-zinc-700 my-1 md:my-2 font-bold">
          Employee Contribution
        </h6>
        <div className="flex flex-row gap-1 justify-center items-center">
          {" "}
          <input
            className="range range-xs range-info"
            type="range"
            min={0}
            max="100"
            value="12"
            defaultValue={12}
            disabled
          />
          <div className="mx-1 text-sm text-gray-800 font-semibold">12%</div>
        </div>
        <h6 className="text-sm text-zinc-700 my-1 md:my-2 font-bold">Retirement Age</h6>
        <div className="flex flex-row gap-1 justify-center items-center">
          {" "}
          <input
            className="range range-xs range-info"
            type="range"
            min={0}
            max="100"
            value="65"
            defaultValue={65}
            disabled
          />
          <div className="mx-1 text-sm text-gray-800 font-semibold">65</div>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="w-full">
          <div className="flex flex-row justify-between text-zinc-800 font-semibold my-1 md:my-2">
            <p className="text-sm">Employer Contribution</p>
            <span className="text-sm  text-zinc-800 font-semibold">8.4%</span>
          </div>
          <div className="flex flex-row justify-between text-zinc-800 font-semibold my-1 md:my-2">
            <p className="text-sm">Interest Rate</p>
            <span className="text-sm text-zinc-800 font-semibold">5%</span>
          </div>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full text-slate-50 bg-purple-700">
            Update
          </button>
          <div className="w-full flex justify-center items-center">
            <a href="#" className="text-blue-700 my-1 text-sm">
              View Help Docs {">"}
            </a>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full h-full bg-orange-300 my-2">
    //   <h5 className="text-xl font-semibold text-zinc-800">Retirement Strategy</h5>
    //   <h6>Employee Contribution</h6>
    //   <input
    //     className="range range-xs"
    //     type="range"
    //     min={0}
    //     max="100"
    //     value="40"
    //     defaultValue={65}
    //     disabled
    //   />
    // </div>
  );
};

export default RetirementStrategy;
