import axios from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { IApartment } from "../../entities/IApartment";
import { handleNavigate } from "../../utils/handleNavigate";

const INITIAL_RESULT_STATE = {
  price: 0,
  name: "",
  rooms: 0,
  parking: 0,
  size: 0,
  bath: 0,
  rent: 0,
  address: "",
};

const ApartmentContext = createContext({} as IContext);

export const ApartmentContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [apartments, setApartments] = useState<IApartment[]>([]);
  const [apartmentLink, setApartmentLink] = useState("");
  const [apartment, setApartment] = useState<IApartment>(INITIAL_RESULT_STATE);

  const handleAddApartment = async () => {
    await axios
      .get(`/api/zap?url=${apartmentLink}`)
      .then((res) => {
        setApartment({
          ...apartment,
          price: res.data.price,
          name: res.data.name,
          rooms: res.data.rooms,
          parking: res.data.parking,
          size: res.data.size,
          bath: res.data.bath,
          rent: res.data.monthly,
        });
        setApartmentLink("");
        setApartments((prevState) => [...prevState, apartment]);
        handleNavigate("/app");
      })
      .catch((err) => console.log(err));
  };

  const handleClean = () => {
    setApartment(INITIAL_RESULT_STATE);
  };

  return (
    <ApartmentContext.Provider
      value={{
        handleAddApartment,
        apartment,
        setApartment,
        apartmentLink,
        setApartmentLink,
        handleClean,
        apartments,
        setApartments,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
};

export const useApartment = () => {
  return useContext(ApartmentContext);
};

interface IContext {
  handleAddApartment: () => Promise<void>;
  apartment: IApartment;
  setApartment: Dispatch<SetStateAction<IApartment>>;
  apartmentLink: string;
  setApartmentLink: Dispatch<SetStateAction<string>>;
  handleClean: () => void;
  apartments: IApartment[];
  setApartments: Dispatch<SetStateAction<IApartment[]>>;
}
