import { Box } from "@chakra-ui/react";
import TableWithHeading from "../components/shared/TableWithHeading";
import ItemDetails from "../components/ItemDetails";

// shares table header
const tHeadArray = [
  "Due Date",
  "Schedule",
  "Start Date",
  "End Date",
  "Amount",
  "Status",
];

const ItemDetailsPage = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      <ItemDetails />
      <TableWithHeading
        title="Shares Breakdown"
        tvariant="simple"
        theader={tHeadArray}
        withButton={false}
      />
      <TableWithHeading
        title="Remaining Shares"
        tvariant="striped"
        theader={tHeadArray}
        withButton={true}
      />
    </Box>
  );
};

export default ItemDetailsPage;
