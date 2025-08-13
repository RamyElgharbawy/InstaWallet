import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react";
import { FiEdit } from "react-icons/fi";

interface ITableProps {
  tvariant: string;
  theader: Array<string>;
  withButton: boolean;
}
const tableData = [
  {
    name: "Name",
    period: "monthly",
    startDate: "01/05/2025",
    dueDate: "01/06/2025",
    amount: "3000",
    status: "remaining",
  },
  {
    name: "Name",
    period: "monthly",
    startDate: "01/05/2025",
    dueDate: "01/06/2025",
    amount: "3000",
    status: "remaining",
  },
  {
    name: "Name",
    period: "monthly",
    startDate: "01/05/2025",
    dueDate: "01/06/2025",
    amount: "3000",
    status: "remaining",
  },
];
const ShareTable = ({ tvariant, theader, withButton }: ITableProps) => {
  return (
    <TableContainer border={"1px"} rounded={"md"}>
      <Table variant={tvariant} colorScheme="green" size={"sm"}>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead>
          <Tr>
            {theader.map((header, indx) => {
              return <Th key={indx}>{header}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((item, indx) => {
            return (
              <Tr key={indx}>
                <Td>{item.name}</Td>
                <Td>{item.period}</Td>
                <Td>{item.startDate}</Td>
                <Td>{item.dueDate}</Td>
                <Td>{item.amount}</Td>
                <Td>{item.status}</Td>
                {withButton ? (
                  <Td>
                    <IconButton
                      aria-label="Edit Record"
                      icon={<FiEdit size={17} />}
                      size="xs"
                      ml={5}
                    >
                      Edit
                    </IconButton>
                  </Td>
                ) : null}
              </Tr>
            );
          })}
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
