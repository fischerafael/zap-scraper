import { Button, Input, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { serializeArray } from "cheerio/lib/api/forms";
import { useEffect, useState } from "react";

const INITIAL_RESULT_STATE = {
  price: 0,
  name: "",
  rooms: 0,
  parking: 0,
  size: 0,
  bath: 0,
  rent: 0,
};

export const PageAdd = () => {
  const [zapLink, setZapLink] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const [result, setResult] = useState(INITIAL_RESULT_STATE);

  console.log(zapLink);

  const handleScrape = async () => {
    await axios
      .get(`/api/zap?url=${zapLink}`)
      .then((res) => {
        setResult({
          ...result,
          price: res.data.price,
          name: res.data.name,
          rooms: res.data.rooms,
          parking: res.data.parking,
          size: res.data.size,
          bath: res.data.bath,
          rent: res.data.monthly,
        });
        setZapLink("");
      })
      .catch((err) => console.log(err));
  };

  const handleClean = () => {
    setResult(INITIAL_RESULT_STATE);
  };

  useEffect(() => {
    if (zapLink) {
      setDisabled(false);
      return;
    }
    setDisabled(true);
  }, [zapLink]);

  return (
    <VStack
      w="full"
      bg="purple.900"
      color="white"
      minH="100vh"
      p="8"
      spacing="16"
    >
      <VStack w="full" maxW="container.sm">
        <VStack w="full">
          <Input
            w="full"
            placeholder="Link do imóvel"
            value={zapLink}
            onChange={(e) => setZapLink(e.target.value)}
          />
          <Button
            isDisabled={isDisabled}
            w="full"
            colorScheme="green"
            onClick={handleScrape}
          >
            Salvar
          </Button>
        </VStack>

        {result.price && (
          <VStack w="full">
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Nome do Imóvel</Text>
              <Text>{result.name}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Preço do Imóvel</Text>
              <Text>R$ {result.price}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Quartos</Text>
              <Text>{result.rooms}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Garagem</Text>
              <Text>{result.parking}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Banheiros</Text>
              <Text>{result.bath}</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Área</Text>
              <Text>{result.size} m²</Text>
            </VStack>
            <VStack w="full" align="flex-start" spacing="0">
              <Text fontSize="xs">Aluguel</Text>
              <Text>R$ {result.rent}</Text>
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
