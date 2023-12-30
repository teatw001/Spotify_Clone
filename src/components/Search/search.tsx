

const Search = () => {
  return (
    <>
      <div className="mb-2 flex flex-col gap-y-6 h-fit bg-gradient-to-b p-6 from-bg-neutral-900">
        <h1 className="text-white text-3xl font-semibold">Search</h1>
        <input
          className="flex w-full text-white  rounded-md bg-neutral-700 border border-transparent px-3 py-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none"
          placeholder="What do you want to listen to ?"
        />
      </div>
      <div className="flex flex-col gap-y-2 w-full px-6">
        <div className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <div className=" flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md ">
              <div className=" relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden ">
                <img src="" alt="" className="w-[48px] h-[48px]" />
              </div>

              <div className=" flex flex-col gap-y-1 overflow-hidden ">
                <p className="text-white truncate font-semibold">Duy</p>
                <p className="text-neutral-400 text-sm truncate">Duy</p>
              </div>
            </div>
          </div>
          <button className=" hover:opacity-75 transition text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              color="white"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
