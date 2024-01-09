import { FC } from "react";
import {
  Bell,
  BellDotIcon,
  Home,
  Layers3,
  ListChecks,
  LogOut,
  Search,
  User,
} from "lucide-react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="p-1 fixed md:h-full md:w-12 bg-slate-100 z-10 md:top-0 md:left-0 w-full h-10 bottom-0 grid md:grid-rows-5 md:grid-cols-1 grid-cols-5 grid-rows-1 rounded-md">
      <div className="hidden md:col-span-1 md:row-span-1 md:flex flex-row md:flex-col justify-center items-center gap-2">
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <a className="btn btn-ghost text-xl">
          <Search className="w-3 h-3 md:w-5 md:h-5"/>
        </a>
        <hr className="my-2 border-gray-200" />
      </div>
      <div className="col-span-5 row-span-1 md:row-span-3 md:col-span-1 flex flex-row md:flex-col justify-evenly items-center gap-3">
        <button className="btn btn-ghost btn-sm">
          <Home className="w-4 h-4 md:w-5 md:h-5"/>
        </button>
        <button className="btn btn-ghost btn-sm">
          <User className="w-4 h-4 md:w-5 md:h-5"/>
        </button>
        <button className="btn btn-ghost btn-sm">
          <ListChecks className="w-4 h-4 md:w-5 md:h-5"/>
        </button>
        <button className="btn btn-ghost btn-sm">
          <Layers3 className="w-4 h-4 md:w-5 md:h-5"/>
        </button>
        <button className="btn btn-ghost btn-sm">
          <BellDotIcon className="md:hidden block w-4 h-4 md:w-5 md:h-5" />
        </button>
        <button className="btn btn-ghost btn-sm">
          <LogOut className="md:hidden block w-4 h-4 md:w-5 md:h-5" />
        </button>
        {/* <User />
        <ListChecks />
        <ListChecks />
        <BellDotIcon className="md:hidden block" />
        <LogOut className="md:hidden block" /> */}
      </div>
      <div className="hidden col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:flex flex-row md:flex-col justify-evenly items-center gap-3">
        <button className="btn btn-ghost btn-sm">
          {" "}
          <BellDotIcon />{" "}
        </button>
        <button className="btn btn-ghost btn-sm">
          {" "}
          <LogOut />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
