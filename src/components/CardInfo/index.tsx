import { Text, VStack } from "@chakra-ui/react";

export interface CardInfoProps {
  label: string;
  value: string | number;
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
