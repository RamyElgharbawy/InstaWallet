import { Box } from "@chakra-ui/react";
import TableWithHeading from "../../components/shared/TableWithHeading";
import ActiveSection from "../../components/shared/ActiveSection";

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
const FellowsPage = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      <ActiveSection name="Fellow" />
      <TableWithHeading
        theader={tHeadArray}
        withButton={true}
        tvariant="simple"
        title="My Fellows"
      />
    </Box>
  );
};

export default FellowsPage;
