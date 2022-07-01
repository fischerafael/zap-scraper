import { Button, VStack } from "@chakra-ui/react";
import { ApartmentCard } from "../../components/ApartmentCard";
import { Header } from "../../components/Header";
import { useApartment } from "../../contexts/useApartment";
import { handleNavigate } from "../../utils/handleNavigate";

export const PageList = () => {
  const { apartments } = useApartment();

  return (
    <VStack bg="gray.100" w="full" minH="100vh" color="green.900" px="8">
      <Header
        button={
          <Button
            colorScheme="green"
            onClick={() => handleNavigate("/app/add")}
          >
            Adicionar
          </Button>
        }
      />

      <VStack w="full" maxW="container.md" h="full" spacing="8">
        {apartments?.map((ap) => {
          return (
            <ApartmentCard
              key={ap.name}
              address={ap.address}
              bath={ap.bath}
              name={ap.name}
              parking={ap.parking}
              price={ap.price}
              rent={ap.rent}
              rooms={ap.rooms}
              size={ap.size}
            />
          );
        })}
      </VStack>
    </VStack>
  );
};
