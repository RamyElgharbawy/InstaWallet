/* eslint-disable @typescript-eslint/no-explicit-any */
// import {
//   Flex,
//   Text,
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   TableContainer,
// } from "@chakra-ui/react";
// import { formatDate } from "../../utils/dateFormat";
// import { useLocation, useNavigate } from "react-router-dom";

// interface ITableData {
//   data: Record<string, any>[];
// }

// interface ITableProps {
//   title?: string;
//   tvariant: string;
//   tableData: ITableData;
//   excludeKeys?: Array<string>;
// }

// const TableWithHeading = ({
//   title,
//   tvariant,
//   tableData,
//   excludeKeys = ["createdAt", "notes", "owner", "updatedAt", "userId", "id"],
// }: ITableProps) => {
//   // get current location
//   const currentLocation = useLocation();
//   const navigate = useNavigate();

//   // Render cell content safely if returned data is an object or array
//   const renderCellContent = (value: any, key: string): string => {
//     if (value === null || value === undefined) {
//       return "-";
//     }

//     if (typeof value === "object") {
//       if (Array.isArray(value)) {
//         // Handle shares array - show count
//         if (key === "shares") {
//           return `${value.length} shares`;
//         }
//         // handle other array
//         return value.join(", ");
//       }
//       return JSON.stringify(value);
//     }

//     // Handle dates
//     if (
//       value instanceof Date ||
//       (typeof value === "string" && !isNaN(Date.parse(value)))
//     ) {
//       return formatDate(value);
//     }
//     // handle boolean values
//     if (typeof value === "boolean") {
//       return value ? "Yes" : "No";
//     }
//     // handle items type
//     if (value === "purchaseItem") {
//       return "purchased";
//     }

//     return String(value);
//   };

//   // Helper function to format header text
//   const formatHeader = (key: string): string => {
//     return key
//       .replace(/([A-Z])/g, " $1")
//       .replace(/^./, (str) => str.toUpperCase())
//       .trim();
//   };

//   // Safety check for tableData
//   if (!tableData || !Array.isArray(tableData)) {
//     return (
//       <Flex flexDirection={"column"} gap={2} my={5}>
//         <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
//           {title}
//         </Text>
//         <Text>No data available</Text>
//       </Flex>
//     );
//   }

//   // Get headers from first object (if data exists)
//   const headers =
//     tableData.length > 0
//       ? Object.keys(tableData[0]).filter((key) => !excludeKeys.includes(key))
//       : [];

//   // If no data after filtering, show empty state
//   if (headers.length === 0) {
//     return (
//       <Flex flexDirection={"column"} gap={2} my={5}>
//         <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
//           {title}
//         </Text>
//         <Text>No displayable data available</Text>
//       </Flex>
//     );
//   }

//   // handler when row clicked
//   const handleOpen = (id: string) => {
//     // create navigation path
//     const path = `${currentLocation.pathname}/${id}`;
//     // navigate to item details page
//     navigate(path);
//   };

//   return (
//     <Flex flexDirection={"column"} gap={2} my={5}>
//       {title !== "" ? (
//         <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
//           {title}
//         </Text>
//       ) : null}

//       {/* Table content */}
//       <TableContainer border={"1px"} rounded={"md"}>
//         <Table variant={tvariant} colorScheme="green" size={"sm"}>
//           <Thead>
//             <Tr>
//               {headers.map((header) => (
//                 <Th key={header} style={{ textTransform: "capitalize" }}>
//                   {formatHeader(header)}
//                 </Th>
//               ))}
//             </Tr>
//           </Thead>
//           <Tbody>
//             {tableData.map((item, indx) => (
//               <Tr
//                 _hover={{ cursor: "pointer" }}
//                 onClick={() => {
//                   handleOpen(item.id);
//                 }}
//                 key={item.id || indx}
//               >
//                 {headers.map((header) => (
//                   <Td key={header}>
//                     {renderCellContent(item[header], header)}
//                   </Td>
//                 ))}
//               </Tr>
//             ))}
//           </Tbody>
//         </Table>
//       </TableContainer>
//     </Flex>
//   );
// };

// export default TableWithHeading;

import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { formatDate } from "../../utils/dateFormat";
import { useLocation, useNavigate } from "react-router-dom";

interface ITableData {
  data: Record<string, any>[];
}

interface ITableProps {
  title?: string;
  tvariant: string;
  tableData: ITableData;
  excludeKeys?: Array<string>;
  withNavigate?: boolean;
  withButton?: boolean;
  onRowClick?: (id: string) => void;
  onButtonClick?: (id: string) => void;
}

const TableWithHeading = ({
  title,
  tvariant,
  tableData,
  excludeKeys = ["createdAt", "notes", "owner", "updatedAt", "userId", "id"],
  withNavigate = false,
  withButton = false,
}: // onRowClick,
// onButtonClick ,
ITableProps) => {
  // get current location
  const currentLocation = useLocation();
  const navigate = useNavigate();

  // Render cell content safely if returned data is an object or array
  const renderCellContent = (value: any, key: string): string => {
    if (value === null || value === undefined) {
      return "-";
    }

    if (typeof value === "object") {
      if (Array.isArray(value)) {
        // Handle shares array - show count
        if (key === "shares") {
          return `${value.length} shares`;
        }
        // handle other array
        return value.join(", ");
      }
      return JSON.stringify(value);
    }

    // Handle dates
    if (
      value instanceof Date ||
      (typeof value === "string" && !isNaN(Date.parse(value)))
    ) {
      return formatDate(value);
    }
    // handle boolean values
    if (typeof value === "boolean") {
      return value ? "Yes" : "No";
    }
    // handle items type
    if (value === "purchaseItem") {
      return "purchased";
    }

    return String(value);
  };

  // Helper function to format header text
  const formatHeader = (key: string): string => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  // Safety check for tableData
  if (!tableData || !Array.isArray(tableData)) {
    return (
      <Flex flexDirection={"column"} gap={2} my={5}>
        <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
          {title}
        </Text>
        <Text>No data available</Text>
      </Flex>
    );
  }

  // Get headers from first object (if data exists)
  const headers =
    tableData.length > 0
      ? Object.keys(tableData[0]).filter((key) => !excludeKeys.includes(key))
      : [];

  // If no data after filtering, show empty state
  if (headers.length === 0) {
    return (
      <Flex flexDirection={"column"} gap={2} my={5}>
        <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
          {title}
        </Text>
        <Text>No displayable data available</Text>
      </Flex>
    );
  }

  // handler when row clicked
  const onRowClick = (id: string) => {
    // create navigation path
    const path = `${currentLocation.pathname}/${id}`;
    // navigate to item details page
    navigate(path);
  };

  // button clicked handler
  const onButtonClick = (id: string) => {
    console.log(id);
  };

  return (
    <Flex flexDirection={"column"} gap={2} my={5}>
      {title !== "" ? (
        <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
          {title}
        </Text>
      ) : null}

      {/* Table content */}
      <TableContainer border={"1px"} rounded={"md"}>
        <Table variant={tvariant} colorScheme="green" size={"sm"}>
          <Thead>
            <Tr>
              {headers.map((header) => (
                <Th key={header} style={{ textTransform: "capitalize" }}>
                  {formatHeader(header)}
                </Th>
              ))}
              {withButton ? <Th>Action</Th> : null}
            </Tr>
          </Thead>
          <Tbody>
            {tableData.map((item, indx) => (
              <Tr
                key={item.id || indx}
                _hover={
                  withNavigate
                    ? { cursor: "pointer", bg: "green.600" }
                    : undefined
                }
                onClick={
                  withNavigate && onRowClick
                    ? () => onRowClick(item.id)
                    : undefined
                }
              >
                {headers.map((header) => (
                  <Td key={header}>
                    {renderCellContent(item[header], header)}
                  </Td>
                ))}
                {/* Add button if needed*/}
                {withButton && (
                  <Td>
                    <Button
                      size="xs"
                      // variant="outline"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click when button is clicked
                        if (onButtonClick) {
                          onButtonClick(item.id);
                        }
                      }}
                    >
                      Edit
                    </Button>
                  </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default TableWithHeading;
