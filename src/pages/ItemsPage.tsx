import { Box } from "@chakra-ui/react";
import ActiveSection from "../components/shared/ActiveSection";
import TableWithHeading from "../components/shared/TableWithHeading";

// shares table header
const tHeadArray = [
  "Due Date",
  "Schedule",
  "Start Date",
  "End Date",
  "Amount",
  "Status",
  "Actions",
];
const ItemsPage = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <ActiveSection name="Item" />
      <TableWithHeading
        title="My Items"
        tvariant="simple"
        theader={tHeadArray}
        withButton={false}
      />
    </Box>
  );
};

export default ItemsPage;
