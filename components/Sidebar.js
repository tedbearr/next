import React from "react";

function Sidebar() {
  return (
    <div className="w-64 h-full bg-slate-900 sm:h-full sm:w-64 sm:bg-main mr-5 text-white p-5 rounded-3xl overflow-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-medium">
      <div className="text-2xl font-extralight">Inventory Management</div>
      <hr></hr>
      <ol className=" pl-5 pt-8 text-xl flex flex-col w-full font-light [&>li]:mb-3 [&>li]:cursor-pointer [&>li]:flex [&>li]:items-center [&>li]:w-48">
        <li>
          <span className="w-3/4">Dashboard</span>
          <i className="fa fa-caret-down"></i>
        </li>
        <li>
          <span className="w-3/4">Administration</span>
          <i className="fa fa-caret-down"></i>
        </li>
        <li>Role</li>
        <li>Requisition</li>
        <li>Mail</li>
        <li>Log</li>
      </ol>
    </div>
  );
}

export default Sidebar;
