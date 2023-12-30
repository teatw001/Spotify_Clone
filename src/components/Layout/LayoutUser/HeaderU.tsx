import SliderBar from "./SliderBar";
import { Outlet } from "react-router-dom";
const HeaderU = () => {
  return (
    <>
      <div className="flex h-screen font-light">
        <SliderBar />
        <main className="h-full flex-1 overflow-y-auto py-2">
          <div className="h-fit bg-gradient-to-b from-emerald-800 p-6">
            <div className=" w-full mb-4 flex items-center justify-between ">
              <div className=" hidden md:flex gap-x-2 items-center ">
                <button className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition ">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    className="text-white"
                    height="35"
                    width="35"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.81809 4.18179C8.99383 4.35753 8.99383 4.64245 8.81809 4.81819L6.13629 7.49999L8.81809 10.1818C8.99383 10.3575 8.99383 10.6424 8.81809 10.8182C8.64236 10.9939 8.35743 10.9939 8.1817 10.8182L5.1817 7.81819C5.09731 7.73379 5.0499 7.61933 5.0499 7.49999C5.0499 7.38064 5.09731 7.26618 5.1817 7.18179L8.1817 4.18179C8.35743 4.00605 8.64236 4.00605 8.81809 4.18179Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className=" rounded-full bg-black flex items-center justify-center hover:opacity-75 transition ">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    className="text-white"
                    height="35"
                    width="35"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.18194 4.18185C6.35767 4.00611 6.6426 4.00611 6.81833 4.18185L9.81833 7.18185C9.90272 7.26624 9.95013 7.3807 9.95013 7.50005C9.95013 7.6194 9.90272 7.73386 9.81833 7.81825L6.81833 10.8182C6.6426 10.994 6.35767 10.994 6.18194 10.8182C6.0062 10.6425 6.0062 10.3576 6.18194 10.1819L8.86374 7.50005L6.18194 4.81825C6.0062 4.64251 6.0062 4.35759 6.18194 4.18185Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="flex md:hidden gap-x-2 items-center">
                <button className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="text-black"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                </button>
                <button className=" rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-black"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                  </svg>
                </button>
              </div>
              <div className=" flex justify-between items-center gap-x-4 ">
                <div>
                  <button
                    type="button"
                    className="w-full rounded-full border border-transparent px-3 py-3 disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-75 transition bg-transparent text-neutral-300 font-medium"
                  >
                    Sign up
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="w-full rounded-full border border-transparent disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition bg-white px-6 py-2"
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <h1 className=" text-white text-3xl font-semibold ">
                Welcome back
              </h1>
              <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4 ">
                <button className=" relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4 ">
                  <div className=" relative min-h-[64px] min-w-[64px] ">
                    <img src="\public\liked.png" alt="" className="w-[64px]" />
                  </div>
                  <p className="font-medium text-white truncate py-5">
                    Liked Songs
                  </p>
                  <div className=" absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 group-hover:opacity-100 hover:scale-110 ">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 448 512"
                      className="text-black"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default HeaderU;
