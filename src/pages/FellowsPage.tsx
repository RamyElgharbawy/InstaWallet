import { Box } from "@chakra-ui/react";
import TableWithHeading from "../components/shared/TableWithHeading";
import ActiveSection from "../components/ActiveSection";

const FellowsPage = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <ActiveSection />
      <TableWithHeading tvariant="simple" title="My Fellows" />
    </Box>
  );
};

export default FellowsPage;
