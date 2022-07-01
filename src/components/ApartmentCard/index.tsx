import { HStack, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { IApartment } from "../../entities/IApartment";
import { CardInfo } from "../CardInfo";

export const ApartmentCard = (props: IApartment) => {
  return (
    <HStack w="full" spacing="4" bg="white">
      <VStack w="300px" h="150px">
        <Image objectFit="cover" h="full" src={props?.imageUrl} />
      </VStack>

      <SimpleGrid w="full" columns={4} spacing="4" p="4" h="full">
        <CardInfo label="Nome" value={props.name} />
        <CardInfo label="Quartos" value={props.rooms} />
        <CardInfo label="Banheiro" value={props.rooms} />
        <CardInfo label="Garagem" value={props.parking} />
        <CardInfo label="Endereço" value={props.address} />
        <CardInfo label="Preço" value={props.price} />
        <CardInfo label="Área" value={props.size} />
        <CardInfo label="Condomínio" value={props.rent} />
      </SimpleGrid>
    </HStack>
  );
};
