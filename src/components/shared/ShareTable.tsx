import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

interface ITableProps {
  tvariant: string;
  theader: Array<string>;
}

const ShareTable = ({ tvariant, theader }: ITableProps) => {
  return (
    <TableContainer border={"1px"} rounded={"md"}>
      <Table variant={tvariant} colorScheme="green" size={"sm"}>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            {theader.map((header) => {
              return <Th>{header}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>01/08/2025</Td>
            <Td>3000</Td>
            <Td>Paid</Td>
          </Tr>
          <Tr>
            <Td>01/09/2025</Td>
            <Td>3000</Td>
            <Td>Paid</Td>
          </Tr>
          <Tr>
            <Td>01/010/2025</Td>
            <Td>3000</Td>
            <Td>Paid</Td>
          </Tr>
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
};

export default ShareTable;
