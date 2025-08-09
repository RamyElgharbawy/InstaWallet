import { Box } from "@chakra-ui/react";
import ActiveSection from "../components/shared/ActiveSection";
import TableWithHeading from "../components/shared/TableWithHeading";

const LoanPage = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <ActiveSection />
      <TableWithHeading title="My Loan" tvariant="simple" />
    </Box>
  );
};

export default LoanPage;
