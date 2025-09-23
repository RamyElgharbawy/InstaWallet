import { Box, Divider } from "@chakra-ui/react";
import ActiveSection from "../../components/shared/ActiveSection";
import TableWithHeading from "../../components/shared/TableWithHeading";
import { useItems } from "../../hooks/itemsHook";
import AppAlert from "../../components/shared/ErrorAlert";

const ItemsPage = () => {
  const { isLoadingItems, itemsList, isItemsError, itemsError } = useItems();

  // validate items data
  const items = itemsList?.data || [];

  if (isLoadingItems)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <AppAlert status="info" message=" Loading items..." />
      </Box>
    );

  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <ActiveSection name="Item" data={items} />

      <Divider borderWidth={"thin"} mt={7} />

      {isItemsError && itemsError?.status === 404 ? (
        <AppAlert
          status="error"
          message={itemsError.message}
          code={itemsError.status}
        />
      ) : (
        <TableWithHeading
          title="My Items"
          tvariant="simple"
          tableData={items}
          withNavigate
        />
      )}
    </Box>
  );
};

export default ItemsPage;
