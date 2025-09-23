import { Box, Spinner } from "@chakra-ui/react";
import ItemDetails from "../../components/ItemDetails";
import { useItems } from "../../hooks/itemsHook";
import AppAlert from "../../components/shared/ErrorAlert";
import TableWithHeading from "../../components/shared/TableWithHeading";

const ItemDetailsPage = () => {
  const { isLoadingItem, item, itemError } = useItems();
  // validate item data
  const itemData = item?.data || {};

  if (isLoadingItem)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <Spinner />
      </Box>
    );

  if (itemError) return <AppAlert status="error" message={itemError.message} />;

  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      <ItemDetails {...itemData} />

      {/* Shares breakdown table */}
      <TableWithHeading
        tvariant="simple"
        title="Shares Breakdown"
        tableData={itemData.shares}
      />

      {/* Remaining shares table */}
      <TableWithHeading
        tvariant="striped"
        title="Remaining Shares"
        tableData={itemData.shares}
        withButton
      />
    </Box>
  );
};

export default ItemDetailsPage;
