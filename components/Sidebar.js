"use client";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar(props) {
  const [menu1, setMenu1] = useState(false);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const [menu5, setMenu5] = useState(false);
  console.log(props.name);
  return (
    <div
      id="Sidebar"
      className="w-64 h-full bg-main mr-5 max-h-96 sm:max-h-full text-white p-5 rounded-3xl overflow-auto overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-medium sm:h-full sm:w-64 sm:bg-main sm:overflow-auto"
    >
      <div className="text-2xl font-extralight hidden sm:block">
        Inventory Management
      </div>
      <hr className="hidden sm:block"></hr>
      <ol className="pl-5 p-0 sm:pt-8 text-xl flex flex-col [&>*]:pb-2 w-full font-light [&>li]:mb-1 [&>li]:flex [&>li]:flex-col [&>li]:w-full">
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
                ? "w-full flex flex-col justify-center mt-2 items-start text-base [&>li]:p-1"
                : "hidden"
            }
          >
            <li className="">
              <Link href="home">Dashboard</Link>
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
                ? "w-full flex flex-col justify-center items-start text-base [&>li]:p-1"
                : "hidden"
            }
          >
            <li>
              <Link href="role">Role</Link>
            </li>
            <li>
              <Link href="device">Device</Link>
            </li>
            <li>
              <Link href="devicecategory">Device Category</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => {
              setMenu3((prev) => !prev);
            }}
          >
            <div className="w-full flex justify-start text-lg">
              Requisition
            </div>
            <div className="w-full flex justify-end">
              <i className="fa fa-caret-down"></i>
            </div>
          </div>
          <ul
            className={
              menu3
                ? "w-full flex flex-col justify-center items-start text-base [&>li]:p-1"
                : "hidden"
            }
          >
            <li>
              <Link href="requisition">Requisition</Link>
            </li>
            <li>
              <Link href="lastposition">Last Position</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => {
              setMenu4((prev) => !prev);
            }}
          >
            <div className="w-full flex justify-start text-lg">
              Mail
            </div>
            <div className="w-full flex justify-end">
              <i className="fa fa-caret-down"></i>
            </div>
          </div>
          <ul
            className={
              menu4
                ? "w-full flex flex-col justify-center items-start text-base [&>li]:p-1"
                : "hidden"
            }
          >
            <li>
              <Link href="mail">Mail</Link>
            </li>
          </ul>
        </li>
        <li>
          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={() => {
              setMenu5((prev) => !prev);
            }}
          >
            <div className="w-full flex justify-start text-lg">
              Log
            </div>
            <div className="w-full flex justify-end">
              <i className="fa fa-caret-down"></i>
            </div>
          </div>
          <ul
            className={
              menu5
                ? "w-full flex flex-col justify-center items-start text-base [&>li]:p-1"
                : "hidden"
            }
          >
            <li>
              <Link href="log">Log</Link>
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default Sidebar;
