import { Button, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useApartment } from "../../contexts/useApartment";
import { handleNavigate } from "../../utils/handleNavigate";

export const PageAdd = () => {
  const [isDisabled, setDisabled] = useState(true);

  const {
    handleAddApartment,
    apartment,
    setApartment,
    handleClean,
    apartmentLink,
    setApartmentLink,
  } = useApartment();

  useEffect(() => {
    if (apartmentLink) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [apartmentLink]);

  return (
    <VStack bg="gray.100" w="full" minH="100vh" color="green.900" px="8">
      <Header
        button={
          <Button colorScheme="green" onClick={() => handleNavigate("/app/")}>
            Cancelar
          </Button>
        }
      />
      <VStack w="full" maxW="container.md">
        <VStack w="full">
          <Input
            w="full"
            placeholder="Link do imóvel"
            value={apartmentLink}
            onChange={(e) => setApartmentLink(e.target.value)}
          />
          <Button
            isDisabled={isDisabled}
            w="full"
            colorScheme="green"
            onClick={handleAddApartment}
          >
            Salvar
          </Button>
        </VStack>

        {apartment.price && (
          <VStack w="full">
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Nome do Imóvel</Text>
              <Text>{apartment.name}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Preço do Imóvel</Text>
              <Text>R$ {apartment.price}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Quartos</Text>
              <Text>{apartment.rooms}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Garagem</Text>
              <Text>{apartment.parking}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Banheiros</Text>
              <Text>{apartment.bath}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Área</Text>
              <Text>{apartment.size} m²</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Condomínio</Text>
              <Text>R$ {apartment.rent}</Text>
            </VStack>
          </VStack>
        )}

        <Button w="full" colorScheme="green" onClick={handleClean}>
          Limpar
        </Button>
      </VStack>
    </VStack>
  );
};
