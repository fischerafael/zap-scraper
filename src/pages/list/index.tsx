import { Button, VStack } from "@chakra-ui/react";
import { ApartmentCard } from "../../components/ApartmentCard";
import { Header } from "../../components/Header";
import { handleNavigate } from "../../utils/handleNavigate";

export const PageList = () => {
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
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
      </VStack>
    </VStack>
  );
};
