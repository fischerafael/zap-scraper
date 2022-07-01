import { children } from "cheerio/lib/api/traversing";
import { createContext, ReactNode, useContext } from "react";

const ApartmentContext = createContext({});

export const ApartmentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <ApartmentContext.Provider value={{}}>{children}</ApartmentContext.Provider>
  );
};

export const useApartment = () => {
  return useContext(ApartmentContext);
};
