import {
  Button,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

export const PageList = () => {
  return (
    <VStack bg="gray.100" w="full" minH="100vh" color="green.900" px="8">
      <HStack w="full" maxW="container.md" h="10vh" justify="space-between">
        <Text fontWeight="bold">APManager</Text>
        <Button colorScheme="green">Adicionar</Button>
      </HStack>

      <VStack w="full" maxW="container.md">
        <HStack h="fit-content" w="full" spacing="4">
          <Image
            w="100px"
            h="100px"
            objectFit="cover"
            src="https://www.e-architect.com/wp-content/uploads/2019/10/kite-apartment-curitiba-brazil-g241019-e4.jpg"
          />
          <SimpleGrid w="full" columns={4} spacing="4">
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
      </VStack>
    </VStack>
  );
};

export interface CardInfoProps {
  label: string;
  value: string;
}

export const CardInfo = (props: CardInfoProps) => {
  return (
    <VStack w="full" h="full" spacing="0" align="flex-start">
      <Text wordBreak="break-all" fontSize="xs">
        {props.label}
      </Text>
      <Text wordBreak="break-all">{props.value}</Text>
    </VStack>
  );
};
