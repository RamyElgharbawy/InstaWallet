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
import { Link } from "react-router-dom";
import type { IShare } from "../../interfaces";
import { formatDate } from "../../utils/dateFormat";

interface ITableProps {
  tvariant: string;
  withButton: boolean;
  tableData: IShare[];
}

// shares table header
const theader = ["Due Date", "Amount", "PayStatus"];

const ShareTable = ({ tvariant, withButton, tableData }: ITableProps) => {
  return (
    <TableContainer border={"1px"} rounded={"md"}>
      <Table variant={tvariant} colorScheme="green" size={"sm"}>
        <Thead>
          <Tr>
            {theader.map((header, indx) => {
              return <Th key={indx}>{header}</Th>;
            })}
            {withButton ? <Th>Action</Th> : null}
          </Tr>
        </Thead>
        <Tbody>
          {tableData?.map((item, indx) => {
            return (
              <Tr key={indx}>
                <Td>{item.dueDate ? formatDate(item.dueDate) : ""}</Td>
                <Td>{item.amount}</Td>
                <Td>{item.payDate ? formatDate(item.payDate) : "_"}</Td>

                {/* Action Button */}
                {withButton ? (
                  <Td>
                    <IconButton
                      as={Link}
                      to={"/user/edit"}
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
      </Table>
    </TableContainer>
  );
};

export default ShareTable;
