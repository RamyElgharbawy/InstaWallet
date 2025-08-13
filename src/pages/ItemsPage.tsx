import { Box } from "@chakra-ui/react";
import ActiveSection from "../components/shared/ActiveSection";
import TableWithHeading from "../components/shared/TableWithHeading";

const ItemsPage = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <ActiveSection name="Item" />
      <TableWithHeading title="My Items" tvariant="simple" />
    </Box>
  );
};

export default ItemsPage;
