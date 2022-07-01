import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ApartmentContextProvider } from "../src/contexts/useApartment";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ApartmentContextProvider>
        <Component {...pageProps} />
      </ApartmentContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
