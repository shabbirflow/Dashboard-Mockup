import { FC } from "react";
import Statdiv from "./Statdiv";
import Trans from "./Trans";

interface TopLeftProps {}

const TopLeft: FC<TopLeftProps> = ({}) => {
  return (
    <div className="card m-2 w-full h-full bg-slate-200 shadow-sm">
      <div className="card-body">
        <div className="w-full flex flex-row md:justify-around justify-between h-fit">
          <div className="avatar">
            <div className="md:w-20 w-14 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center p-2">
            <div className="flex flex-col items-center">
              <h2 className="card-title text-zinc-700">Hi Mike!</h2>
              <p className="text-zinc-600">Welcome back</p>
            </div>
          </div>
        </div>
        <hr className="my-2 border-gray-300" />
        <div>
          <p className="text-zinc-600 font-semibold">Today</p>
        </div>
        <Statdiv />
        <div className="card-actions justify-start my-2">
          <button className="btn btn-primary">I want to...</button>
        </div>
        <Trans />
      </div>
    </div>
  );
};

export default TopLeft;
