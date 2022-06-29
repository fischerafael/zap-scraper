import { Button, Input, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION });
const databaseId = process.env.NEXT_PUBLIC_DATABASE_ID;

export const PageAdd = () => {
  const [zapLink, setZapLink] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const [result, setResult] = useState({ price: 0 });

  console.log(zapLink);

  const handleScrape = async () => {
    await axios
      .get(`/api/zap?url=${zapLink}`)
      .then((res) => {
        setResult({ ...result, price: res.data.price });
        setZapLink("");
      })
      .catch((err) => console.log(err));

    await notion.pages.create({
      parent: { database_id: databaseId as string },
      properties: {
        title: {
          title: [
            {
              text: {
                content: String(result.price),
              },
            },
          ],
        },
      },
    });
  };

  const handleClean = () => {
    setResult({ price: 0 });
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
        <VStack maxW="container.sm" w="full" align="flex-start" spacing="0">
          <Text fontSize="xs">Preço do Imóvel</Text>
          <Text>R$ {result.price}</Text>
        </VStack>
      )}

      <Button
        maxW="container.sm"
        w="full"
        colorScheme="green"
        onClick={handleClean}
      >
        Limpar
      </Button>
    </VStack>
  );
};
