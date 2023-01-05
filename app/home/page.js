"use client";

import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  // let products = getData();
  // console.log(products);

  const [idEdit, setIdEdit] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    let modal = document.getElementById("Modal");
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  const openModal = () => {
    clearFrom();
    reset();
    setIdEdit();
    let modal = document.getElementById("Modal");
    modal.style.display = "block";
  };

  const openModalEdit = async (id) => {
    reset();
    await fetch(`https://dummyjson.com/products/${id}`).then((res) =>
      res.json().then((resp) => {
        setIdEdit(resp.id);
        document.getElementById("data1").value = resp.title;
        document.getElementById("data2").value = resp.brand;
        document.getElementById("data3").value = resp.description;
      })
    );

    let modal = document.getElementById("Modal");
    modal.style.display = "block";
  };

  const closeModal = () => {
    let modal = document.getElementById("Modal");
    modal.style.display = "none";
  };

  const clearFrom = () => {
    document.getElementById("data1").value = "";
    document.getElementById("data2").value = "";
    document.getElementById("data3").value = "";
  };

  const onsubmit = async (data) => {
    console.log(idEdit);
    if (idEdit) {
      fetch(`https://dummyjson.com/products/${idEdit}`, {
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
      clearFrom();
      reset();
      closeModal();
    } else {
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
      clearFrom();
      reset();
      closeModal();
    }
  };

  const deleteData = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status == 200) {
        toast.success("Success delete data");
      } else {
        toast.error("Error");
      }
    });
  };

  const [product, setProduct] = useState([]);
  let { products } = product;

  useEffect(() => {
    fetch("https://dummyjson.com/products").then((res) =>
      res.json().then((result) => {
        setProduct(result);
      })
    );
  }, []);

  // console.log(products);
  // return <></>;
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
      cell: (row) => (
        <>
          <button
            onClick={() => openModalEdit(row.id)}
            className="w-full bg-slate-300 p-1 mr-2 rounded-sm"
          >
            edit
          </button>
          <button
            onClick={() => deleteData(row.id)}
            className="w-full bg-slate-200 p-1 rounded-sm"
          >
            delete
          </button>
        </>
      ),
    },
  ];

  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );

  const [pending, setPending] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  const data = products;

  return (
    <div className="flex flex-col w-full h-full">
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <div id="idEdit"></div>
      <p className="text-3xl">Requisition</p>
      <br></br>
      <hr></hr>
      <div className="justify-end items-end w-full flex my-2">
        <button
          className="bg-main p-2 text-white rounded-lg"
          onClick={openModal}
        >
          New Requisition
        </button>
      </div>
      <div className="w-full h-full flex flex-col">
        <form className="w-full">
          <div className="flex w-full [&>label]:w-1/5 flex-row p-3 [&>input]:w-1/4 [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
            <label>Input Date</label>
            <input
              type="text"
              className="focus:outline-none focus:border-main"
            ></input>
          </div>
          <div className="flex w-full [&>label]:w-1/5 flex-row p-3 [&>input]:w-1/4 [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
            <label>Input Date</label>
            <input
              type="text"
              className="focus:outline-none focus:border-main"
            ></input>
          </div>
          <div className="flex w-full [&>label]:w-1/5 flex-row p-3 [&>input]:w-1/4 [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
            <label>Input Text</label>
            <input
              type="text"
              className="focus:outline-none focus:border-main"
            ></input>
          </div>
          <div className="flex w-full [&>label]:w-1/5 flex-row p-3 [&>input]:w-1/4 [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
            <label>Input Text</label>
            <input
              type="text"
              className="focus:outline-none focus:border-main"
            ></input>
          </div>
          <div className="flex flex-row p-2">
            <button className="bg-main p-1 text-white rounded-lg" type="button">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="w-full h-auto p-6">
        <DataTable
          data={data}
          columns={column}
          pagination
          title="Requisition Data"
          progressPending={pending}
          responsive
          subHeaderAlign="right"
          subHeaderWrap
          striped
          direction="auto"
          dense
          // defaultSortFieldId={1}
        ></DataTable>
      </div>
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
              <form
                className="w-full"
                onSubmit={handleSubmit(() => onsubmit())}
              >
                <div className="flex w-full [&>label]:w-1/5 flex-row p-3 [&>input]:w-1/4 [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
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
                <div className="flex w-full [&>label]:w-1/5 flex-row p-3 [&>input]:w-1/4 [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
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
                <div className="flex w-full [&>label]:w-1/5 flex-row p-3 [&>input]:w-1/4 [&>input]:border-1 [&>input]:rounded-sm [&>input]:p-1 items-center">
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
    </div>
  );
}
