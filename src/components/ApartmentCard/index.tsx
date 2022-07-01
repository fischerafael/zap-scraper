import { HStack, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { CardInfo } from "../CardInfo";

export const ApartmentCard = () => {
  return (
    <HStack w="full" spacing="4" bg="white">
      <VStack w="300px" h="full">
        <Image
          objectFit="cover"
          h="full"
          src="https://www.e-architect.com/wp-content/uploads/2019/10/kite-apartment-curitiba-brazil-g241019-e4.jpg"
        />
      </VStack>

      <SimpleGrid w="full" columns={4} spacing="4" p="4" h="full">
        <CardInfo label="Nome" value="Apartamento X" />
        <CardInfo label="Quartos" value="2" />
        <CardInfo label="Banheiro" value="1" />
        <CardInfo label="Garagem" value="1" />
        <CardInfo label="Endereço" value="Rua louca, 1900" />
        <CardInfo label="Preço" value="R$ 280.000" />
        <CardInfo label="Área" value="72 m²" />
        <CardInfo label="Condomínio" value="R$ 520" />
      </SimpleGrid>
    </HStack>
  );
};
