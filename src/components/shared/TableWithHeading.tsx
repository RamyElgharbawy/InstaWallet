import { Flex, Text } from "@chakra-ui/react";
import ShareTable from "./ShareTable";
import type { IShare } from "../../interfaces";

interface ITableProps {
  title: string;
  tvariant: string;
  theader: Array<string>;
  withButton: boolean;
  data: IShare[];
}

const TableWithHeading = ({ title, tvariant, withButton }: ITableProps) => {
  return (
    <Flex flexDirection={"column"} gap={2} my={5}>
      <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
        {title}
      </Text>
      <ShareTable tvariant={tvariant} withButton={withButton} tableData={[]} />
    </Flex>
  );
};

export default TableWithHeading;
