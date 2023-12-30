const SliderBar = () => {
  return (
    <div className=" hidden md:flex flex-col gap-y-2 bg-black h-screen w-[300px] p-2 ">
      <div className="bg-neutral-900 rounded-lg h-fit w-full">
        <div className=" flex flex-col gap-y-4 px-5 py-4 ">
          <a
            className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition py-1 text-white"
            href="/"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              height="26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <p className="truncate w-full">Home</p>
          </a>
          <a
            className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1"
            href="/search"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="26"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
            <p className="truncate w-full">Search</p>
          </a>
        </div>
      </div>
      <div className="bg-neutral-900 rounded-lg w-full overflow-y-auto h-full">
        <div className="flex flex-col h-full">
          <div className=" flex items-center justify-between px-5 pt-4 ">
            <div className=" inline-flex items-center gap-x-2 ">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-400"
                height="26"
                width="26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M17 17v-13h4"></path>
                <path d="M13 5h-10"></path>
                <path d="M3 9l10 0"></path>
                <path d="M9 13h-6"></path>
              </svg>
              <p className=" text-neutral-400 font-medium text-md ">
                Your Library
              </p>
            </div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              version="1.1"
              className=" text-neutral-400 cursor-pointer hover:text-white transition "
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
              <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
            </svg>
          </div>
          <div className=" flex flex-col gap-y-2 mt-4 px-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
