import TopLeft from "./components/TopLeft";
import Navbar from "./components/Navbar";
import Middle from "./components/Middle";
import RightDiv from "./components/RightDiv";

function App() {
  return (
    <div className="md:h-[100vh] md:w-[100vw] w-[100vw] h-[300vh] absolute overflow-x-hidden bg-slate-50">
      <Navbar />
      <div className="w-full h-full grid md:grid-cols-4 md:grid-rows-1 grid-rows-3 grid-cols-1 gap-1 md:ml-10">
        <div className="p-2 flex justify-center items-center">
          <TopLeft />
        </div>
        <div className="md:col-span-2"><Middle /></div>
        <div className="">
          <RightDiv />
        </div>
      </div>
    </div>
  );
}

export default App;
