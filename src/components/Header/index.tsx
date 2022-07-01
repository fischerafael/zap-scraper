import { Button, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { handleNavigate } from "../../utils/handleNavigate";

interface HeaderProps {
  button: ReactNode;
}

export const Header = (props: HeaderProps) => {
  return (
    <HStack w="full" maxW="container.md" h="10vh" justify="space-between">
      <Text fontWeight="bold">APManager</Text>
      {props.button}
    </HStack>
  );
};
