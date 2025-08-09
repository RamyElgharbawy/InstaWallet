import { Flex, Text } from "@chakra-ui/react";
import ShareTable from "./ShareTable";

interface ITableProps {
  title: string;
  tvariant: string;
}

const tHeadArray = ["Title", "Amount", "Start Date", "Status"];

const TableWithHeading = ({ title, tvariant }: ITableProps) => {
  return (
    <Flex flexDirection={"column"} gap={2} my={5} shadow={"2xl"} p={3}>
      <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
        {title}
      </Text>
      <ShareTable tvariant={tvariant} theader={tHeadArray} />
    </Flex>
  );
};

export default TableWithHeading;
