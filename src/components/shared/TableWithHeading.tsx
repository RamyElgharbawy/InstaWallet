import { Flex, Text } from "@chakra-ui/react";
import ShareTable from "./ShareTable";

interface ITableProps {
  title: string;
  tvariant: string;
  theader: Array<string>;
  withButton: boolean;
}

const TableWithHeading = ({
  title,
  tvariant,
  theader,
  withButton,
}: ITableProps) => {
  return (
    <Flex flexDirection={"column"} gap={2} my={5}>
      <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
        {title}
      </Text>
      <ShareTable
        tvariant={tvariant}
        theader={theader}
        withButton={withButton}
      />
    </Flex>
  );
};

export default TableWithHeading;
