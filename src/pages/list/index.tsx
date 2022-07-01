import {
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ApartmentCard } from "../../components/ApartmentCard";
import { CardInfo } from "../../components/CardInfo";

export const PageList = () => {
  return (
    <VStack bg="gray.100" w="full" minH="100vh" color="green.900" px="8">
      <HStack w="full" maxW="container.md" h="10vh" justify="space-between">
        <Text fontWeight="bold">APManager</Text>
        <Button colorScheme="green">Adicionar</Button>
      </HStack>

      <VStack w="full" maxW="container.md" h="full" spacing="8">
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
        <ApartmentCard />
      </VStack>
    </VStack>
  );
};
