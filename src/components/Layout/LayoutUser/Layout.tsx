import HeaderU from "./HeaderU";
import Player from "../../Player";
import SongsProvider from "../../Store/context";

const LayoutUser = () => {
  return (
    <>
      <SongsProvider>
        <HeaderU />

        <Player />
      </SongsProvider>
    </>
  );
};

export default LayoutUser;
