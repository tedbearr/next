import Sidebar from "../../components/Sidebar";

export default function HomeLayout({ children }) {
  return (
    <div className="w-full h-screen flex p-3">
      <Sidebar></Sidebar>
      <div className="flex flex-col h-full overflow-auto w-full bg-slate-200 rounded-3xl">
        <div className="px-5">
          <div className="mt-5"></div>
          <div className="h-auto bg-white w-full rounded-3xl p-5 shadow-xl">
            <div> {children} </div>
          </div>
          <div className="mb-10"></div>
        </div>
      </div>
    </div>
  );
}
