import React from "react";

function Loading(props) {
  console.log(props.show);
  return (
    <div
      className={
        props.show
          ? "block fixed pt-48 left-0 top-0 w-full h-full bg-gray-500 bg-opacity-40"
          : "hidden"
      }
    >
      <div className="bg-black flex flex-col m-auto h-auto w-1/4">
        <div className="flex">
          {/* <div className="justify-start font-bold flex w-full items-center">
              Modal Title
            </div> */}
          {/* <div
              className="cursor-pointer flex justify-end items-center hover:text-red-600"
              onClick={() => {
                setLoading((prev) => !prev);
              }}
            >
              x
            </div> */}
        </div>
        <div className="h-full flex flex-col my-5 text-center">
          <div className="w-full h-full flex flex-col justify-center items-center text-white">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
