import React, { createContext, useState } from "react";

export const SongsContext = createContext({} as any);
type Props = {
  children?: React.ReactNode;
};

const SongsProvider = ({ children }: Props) => {
  const [songID, setSongID] = useState(null);
  const [stt, setStt] = useState(0);
  return (
    <SongsContext.Provider value={{ songID, setSongID, stt, setStt }}>
      {children}
    </SongsContext.Provider>
  );
};
export default SongsProvider;
