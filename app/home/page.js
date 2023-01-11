"use client";

import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  // let products = getData();
  // console.log(products);

  const [idEdit, setIdEdit] = useState();
  const [product, setProduct] = useState([]);
  let { products } = product;
  const [pending, setPending] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) =>
      res.json().then((result) => {
        setProduct(result);
      })
    );
  }, []);

  useEffect(() => {
    let modal = document.getElementById("Modal");
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getFieldState,
  } = useForm();

  const openModal = () => {
    clearFrom();
    reset();
    setIdEdit();
    let modal = document.getElementById("Modal");
    modal.style.display = "block";
  };

  const openModalEdit = async (id) => {
    reset();
    document.getElementById("Modal").style.display = "block";
    setLoading(true);
    await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
      res.json().then((resp) => {
        setIdEdit(resp.id);
        document.getElementById("data1").value = resp.title;
        document.getElementById("data2").value = resp.brand;
        document.getElementById("data3").value = resp.description;
      })
    );
    setLoading(false);
    // console.log(getFieldState("brand"));
  };

  const openModalView = async (id) => {
    reset();
    document.getElementById("Modal").style.display = "block";
    setLoading(true);
    await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
      res.json().then((resp) => {
        setIdEdit(resp.id);
        document.getElementById("data1").value = resp.title;
        document.getElementById("data2").value = resp.brand;
        document.getElementById("data3").value = resp.description;
        document.getElementById("data1").readOnly = true;
        document.getElementById("data2").readOnly = true;
        document.getElementById("data3").readOnly = true;
      })
    );
    setLoading(false);
    // console.log(getFieldState("brand"));
  };

  const closeModal = () => {
    let modal = document.getElementById("Modal");
    modal.style.display = "none";
    clearFrom();
  };

  const clearFrom = () => {
    document.getElementById("data1").value = "";
    document.getElementById("data2").value = "";
    document.getElementById("data3").value = "";
    document.getElementById("data1").readOnly = false;
    document.getElementById("data2").readOnly = false;
    document.getElementById("data3").readOnly = false;
  };

  const onsubmit = async (data) => {
    console.log(idEdit);
    if (idEdit) {
      setLoading(true);
      await fetch(`https://dummyjson.com/products/${idEdit}`, {
        method: "PUT" /* or PATCH */,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status == 200) {
          toast.success("Success edit data");
        } else {
          toast.error("Error");
        }
      });
      setLoading(false);
      clearFrom();
      reset();
      closeModal();
    } else {
      setLoading(true);
      await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status == 200) {
          toast.success("Success add data");
        } else {
          toast.error("Error");
        }
      });
      setLoading(false);
      clearFrom();
      reset();
      closeModal();
    }
  };

  const deleteData = async (id) => {
    setLoading(true);
    await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status == 200) {
        toast.success("Success delete data");
      } else {
        toast.error("Error");
      }
    });
    setLoading(false);
  };

  const search = () => {
    document.getElementById("table").style.display = "block";
  };

  const column = [
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Action",
      button: true,
      width: "200px",
      cell: (row) => (
        <>
          <button
            onClick={() => openModalView(row.id)}
            className="w-full bg-slate-400 py-1 mr-2 rounded-sm"
            title="View"
          >
            <i className="fa fa-eye text-white"></i>
          </button>
          <button
            onClick={() => openModalEdit(row.id)}
            className="w-full bg-green-500 p-1 mr-2 rounded-sm"
          >
            <i className="fa fa-pencil text-white"></i>
          </button>
          <button
            onClick={() => deleteData(row.id)}
            className="w-full bg-red-500 p-1 rounded-sm"
          >
            <i className="fa fa-trash text-white"></i>
          </button>
        </>
      ),
    },
  ];

  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const data = products;

  return (
    <div className="flex flex-col w-full h-full">
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <p className="text-3xl">Menu 1</p>
      <br></br>
      <hr></hr>
      <div className="justify-end items-end w-full flex my-2">
        <button
          className="bg-main p-2 text-white rounded-lg hover:bg-slate-400"
          onClick={openModal}
        >
          New Data
        </button>
      </div>
      {/* Filter form  */}
      <div className="w-full h-full flex flex-col overflow-auto">
        <form className="w-full">
          <div className="flex w-1/2 [&>label]:w-full flex-row p-3 [&>input]:w-full [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
            <label>Input Date</label>
            <input
              type="text"
              className="focus:outline-none focus:border-main"
            ></input>
          </div>
          <div className="flex w-1/2 [&>label]:w-full flex-row p-3 [&>input]:w-full [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
            <label>Input Date</label>
            <input
              type="text"
              className="focus:outline-none focus:border-main"
            ></input>
          </div>
          <div className="flex w-1/2 [&>label]:w-full flex-row p-3 [&>input]:w-full [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
            <label>Input Text</label>
            <input
              type="text"
              className="focus:outline-none focus:border-main"
            ></input>
          </div>
          <div className="flex flex-row p-2">
            <button
              className="bg-main p-1 text-white rounded-lg hover:bg-slate-400"
              type="button"
              onClick={search}
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {/* DataTable */}
      <div className="w-full h-auto p-6 hidden" id="table">
        <DataTable
          data={data}
          columns={column}
          pagination
          title="Data"
          progressPending={pending}
          responsive
          subHeaderAlign="right"
          subHeaderWrap
          striped
          direction="auto"
          dense
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          // defaultSortFieldId={1}
        ></DataTable>
      </div>
      {/* Modal Form  */}
      <div
        className=" hidden fixed pt-24 pb-24 left-0 top-0 w-full h-full overflow-auto bg-gray-500 bg-opacity-40"
        id="Modal"
      >
        <div className="bg-white flex flex-col m-auto h-auto overflow-auto p-5 border-1 border-gray-100 w-4/5">
          <div className="flex border-b-1">
            <div className="justify-start font-bold flex w-full items-center">
              Modal Title
            </div>
            {/* <div
              className="cursor-pointer flex justify-end items-center hover:text-red-600"
              onClick={closeModal}
            >
              x
            </div> */}
          </div>
          <div className="h-full flex flex-col my-5">
            <div className="w-full h-full flex flex-col">
              <form onSubmit={handleSubmit(() => onsubmit())}>
                <div className="flex w-1/2 [&>label]:w-full flex-row p-3 [&>input]:w-full [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
                  <label>Title</label>
                  <input
                    type="text"
                    className="focus:outline-none focus:border-main"
                    id="data1"
                    {...register("title", { required: true })}
                  ></input>
                  <div className="text-red-600">
                    {errors.title?.type === "required" && "Title is required"}
                  </div>
                </div>
                <div className="flex w-1/2 [&>label]:w-full flex-row p-3 [&>input]:w-full [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
                  <label>Brand</label>
                  <input
                    type="text"
                    className="focus:outline-none focus:border-main"
                    id="data2"
                    {...register("brand", { required: true })}
                  ></input>
                  <div className="text-red-600">
                    {errors.brand?.type === "required" && "Brand is required"}
                  </div>
                </div>
                <div className="flex w-1/2 [&>label]:w-full flex-row p-3 [&>input]:w-full [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
                  <label>Description</label>
                  <input
                    type="text"
                    className="focus:outline-none focus:border-main"
                    id="data3"
                    {...register("description", { required: true })}
                  ></input>
                  <div className="text-red-600">
                    {errors.description?.type === "required" &&
                      "Description is required"}
                  </div>
                </div>
                <div className="w-full flex justify-end border-t-1 pt-2">
                  <button
                    className="bg-gray-500 text-white px-4 py-1 rounded-md mr-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-main text-white px-4 py-1 rounded-md"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Loading  */}
      <div
        className={
          loading
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
    </div>
  );
}
