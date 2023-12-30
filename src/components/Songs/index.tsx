import { useContext } from "react";
import { useFetSongsQuery } from "../Store/song.service";
import { ISongs } from "../../models";
import { SongsContext } from "../Store/context";
const Songs = () => {
  const { setSongID, setStt } = useContext(SongsContext);
  const { data } = useFetSongsQuery();

  const onSongClick = (song: ISongs, index: any) => {
    setSongID(song);
    setStt(index);

    // Lưu trạng thái vào localStorage
    localStorage.setItem("songStt", index);
    localStorage.setItem("songID", JSON.stringify(song));
  };

  return (
    <>
      {data?.map((song, index) => {
        return (
          <div
            onClick={() => onSongClick(song, index)}
            key={index}
            className=" relative group flex flex-col items-center justify-center rounded-md overflow-hidden gap-x-4 bg-neutral-400/5 cursor-pointer hover:bg-neutral-400/10 transition p-3 "
          >
            <div className=" relative aspect-square w-full h-full rounded-md overflow-hidden ">
              <img src={song?.links?.images[0]?.url} alt="" />
            </div>
            <div className="flex flex-col items-start w-full pt-4 gap-y-1">
              <p className="font-semibold truncate text-white w-full">
                {song?.name}
              </p>
              <p className=" text-neutral-400 text-sm pb-4 w-full truncate ">
                By {song?.author}
              </p>
            </div>
            <div className=" absolute bottom-24 right-5 ">
              <button className=" transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 ">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  className={`text-black `}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Songs;
