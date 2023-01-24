import Image from "next/image";
export default function Page() {
  return (
    <div className="w-96 h-full bg-white rounded-3xl p-5 flex flex-col">
      <div className="text-3xl w-full flex justify-center">Login Inventory</div>
      <div className="w-full flex justify-center my-8">
        {/* <Image src="https://iili.io/8hC6an.png" width={500} height="500" alt="lasbdasldn"></Image> */}
        <img src="https://iili.io/8hC6an.png" width={180} alt="Logo"></img>
      </div>
      <div className="">
        <form className="flex flex-col [&>input]:border-2 [&>small]:mt-5">
          <small>Username</small>
          <input type="text"></input>
          <small>Password</small>
          <input type="text"></input>
        </form>
      </div>
      <div className="w-full flex justify-end [&>small]:text-red-500">
        <small>
          <u>Forgot Password</u>
        </small>
      </div>
      <div className="w-full flex flex-col justify-center mb-10 items-center [&>input]:border-2 [&>input]:mt-5">
        <input type="text" placeholder="Captcha" className="w-1/2"></input>
        <input type="text" className="w-full"></input>
      </div>
      <div>
        <button className="w-full bg-main text-white p-2 rounded-3xl">
          Login
        </button>
      </div>
    </div>
  );
}
