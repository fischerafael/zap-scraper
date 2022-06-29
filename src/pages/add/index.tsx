import { Button, Input, VStack } from "@chakra-ui/react";

export const PageAdd = () => {
  return (
    <VStack w="full" bg="gray.900" color="white" minH="100vh" p="8">
      <VStack w="full" maxW="container.sm">
        <Input w="full" placeholder="Link do imóvel" />
        <Button w="full" colorScheme="cyan">
          Salvar
        </Button>
      </VStack>
    </VStack>
  );
};
