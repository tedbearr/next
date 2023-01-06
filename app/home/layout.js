"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";

export default function HomeLayout({ children }) {
  const [hide, setHide] = useState(true);
  // console.log(hide)
  return (
    <div className="w-full h-full flex p-3 sm:h-screen">
      <div className={hide ? "" : "hidden"}>
        <Sidebar></Sidebar>
      </div>
      <div className="-mt-3 -mr-2" onClick={() => setHide((prev) => !prev)}>
        <i className="fa fa-eye-slash text-main text-xs"></i>
      </div>
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
