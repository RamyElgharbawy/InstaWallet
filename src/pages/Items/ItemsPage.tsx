import { Box } from "@chakra-ui/react";
import ActiveSection from "../../components/shared/ActiveSection";
import TableWithHeading from "../../components/shared/TableWithHeading";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../../config/httpReqUtils";
import type { IItem } from "../../interfaces";

const ItemsPage = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["items"],
    queryFn: getAllItems,
  });

  // filter data to get loan list
  const itemsList =
    data?.data.filter((item: IItem) => item.type === "purchaseItem") || [];

  if (isLoading)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        Loading items...
      </Box>
    );
  if (isError)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        Error: {error.message}
      </Box>
    );

  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <ActiveSection name="Item" data={itemsList} />

      <TableWithHeading
        title="My Items"
        tvariant="simple"
        tableData={itemsList}
      />
    </Box>
  );
};

export default ItemsPage;
