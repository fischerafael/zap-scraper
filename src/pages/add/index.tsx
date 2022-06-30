import { Button, Input, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const PageAdd = () => {
  const [zapLink, setZapLink] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const [result, setResult] = useState({ price: 0, name: "" });

  console.log(zapLink);

  const handleScrape = async () => {
    await axios
      .get(`/api/zap?url=${zapLink}`)
      .then((res) => {
        setResult({ ...result, price: res.data.price, name: res.data.name });
        setZapLink("");
      })
      .catch((err) => console.log(err));
  };

  const handleClean = () => {
    setResult({ price: 0, name: "" });
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
          </VStack>
        )}

        <Button w="full" colorScheme="green" onClick={handleClean}>
          Limpar
        </Button>
      </VStack>
    </VStack>
  );
};
