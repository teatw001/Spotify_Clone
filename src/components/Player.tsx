import "react-h5-audio-player/lib/styles.css";
import { useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import { SongsContext } from "./Store/context";
import { useContext } from "react";
import { useFetSongsQuery } from "./Store/song.service";
const Player = () => {
  const { songID, stt, setSongID, setStt } = useContext(SongsContext);

  const { data } = useFetSongsQuery();

  const onHandleNextClick = () => {
    if (data && stt < data.length - 1) {
      const nextStt = stt + 1;
      setSongID(data?.[nextStt]);

      setStt(nextStt);
    }
  };
  const onHandlePrevClick = () => {
    if (data && stt < data.length - 1 && stt > 0) {
      const nextStt = stt - 1;
      setSongID(data?.[nextStt]);

      setStt(nextStt);
    }
  };
  useEffect(() => {
    // Kiểm tra xem có dữ liệu trong localStorage không
    const savedStt = localStorage.getItem("songStt");
    const savedSongID = localStorage.getItem("songID");

    if (savedStt && savedSongID) {
      setStt(parseInt(savedStt, 10));
      setSongID(JSON.parse(savedSongID));
    }
  }, []);
  return (
    <>
      {songID && (
        <footer className="bg-[#171717] absolute bottom-0 w-full col-span-6 px-2 flex gap-6">
          <div className="flex items-center w-[21%]  md:flex">
            <img
              className="h-14 rounded-full md:flex w-14 mr-4 flex-shrink-0"
              src={songID.links.images[0].url}
              alt=""
            />
            <div className="mr-4">
              <div className="text-sm hidden md:flex text-white text-line-clamp-1 font-light">
                {songID.author}
              </div>
              <div className="text-xs hidden md:flex text-gray-100 text-line-clamp-1">
                <span>{songID.name}</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-green-200 p-2">
                <svg className="w-4 h-4 fill-current " viewBox="0 0 20 20">
                  <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
                </svg>
              </button>
              <button className="text-gray-100 p-2">
                <svg
                  className="w-4 h-4 "
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="currentColor" fillRule="evenodd">
                    <path
                      d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                      fillRule="nonzero"
                    ></path>
                    <path d="M10 8h4v3h-4z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <AudioPlayer
            autoPlay
            src={songID.url}
            onClickNext={() => onHandleNextClick()}
            onClickPrevious={() => onHandlePrevClick()}
            showSkipControls={true}
            showJumpControls={false}
            className="bg-[#171717] text-white"
            layout="stacked-reverse"
          />
        </footer>
      )}
    </>
  );
};

export default Player;
