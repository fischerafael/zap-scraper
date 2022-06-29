import { Button, Input, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export const PageAdd = () => {
  const [zapLink, setZapLink] = useState("");

  console.log(zapLink);

  const handleScrape = async () => {
    await axios
      .get(`/api/zap?url=${zapLink}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <VStack w="full" bg="purple.900" color="white" minH="100vh" p="8">
      <VStack w="full" maxW="container.sm">
        <Input
          w="full"
          placeholder="Link do imóvel"
          value={zapLink}
          onChange={(e) => setZapLink(e.target.value)}
        />
        <Button w="full" colorScheme="green" onClick={handleScrape}>
          Salvar
        </Button>
      </VStack>
    </VStack>
  );
};
