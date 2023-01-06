"use client";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar() {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  // console.log(activeSidebar);
  return (
    <div
      id="Sidebar"
      className="w-64 hidden h-full bg-main mr-5 text-white p-5 rounded-3xl overflow-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-medium sm:h-full sm:w-64 sm:bg-main sm:flex sm:flex-col"
    >
      <div className="text-2xl font-extralight">Inventory Management</div>
      <hr></hr>
      <ol className="pl-5 pt-8 text-xl flex flex-col w-full font-light [&>li]:mb-1 [&>li]:flex [&>li]:flex-col [&>li]:w-full">
        <li>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => {
              setMenu1((prev) => !prev);
            }}
          >
            <div className="w-full flex justify-start text-lg">Dashboard</div>
            <div className="w-full flex justify-end">
              <i className="fa fa-caret-down"></i>
            </div>
          </div>
          <ul
            className={
              menu1
                ? "w-full flex flex-col justify-center items-center text-base [&>li]:p-1"
                : "hidden"
            }
          >
            <li>
              <Link href="login">Child Menu</Link>
            </li>
            <li>
              <Link href="login">Child Menu</Link>
            </li>
            <li>
              <Link href="login">Child Menu</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => {
              setMenu2((prev) => !prev);
            }}
          >
            <div className="w-full flex justify-start text-lg">
              Administration
            </div>
            <div className="w-full flex justify-end">
              <i className="fa fa-caret-down"></i>
            </div>
          </div>
          <ul
            className={
              menu2
                ? "w-full flex flex-col justify-center items-center text-base [&>li]:p-1"
                : "hidden"
            }
          >
            <li>
              <Link href="login">Child Menu</Link>
            </li>
            <li>
              <Link href="login">Child Menu</Link>
            </li>
            <li>
              <Link href="login">Child Menu</Link>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Sidebar;
