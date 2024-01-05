import { createContext, useState } from "react";

const AktivasiContext = createContext();
const AktivasiContextProvider = ({ children }) => {
  const [aktivasiEmail, setAktivasiEmail] = useState("");

  return (
    <AktivasiContext.Provider value={{ aktivasiEmail, setAktivasiEmail }}>
      {children}
    </AktivasiContext.Provider>
  );
};

export const Aktivasi = AktivasiContext;
export default AktivasiContextProvider;
