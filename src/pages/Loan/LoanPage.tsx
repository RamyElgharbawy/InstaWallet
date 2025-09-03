import { Box } from "@chakra-ui/react";
import ActiveSection from "../../components/shared/ActiveSection";
import TableWithHeading from "../../components/shared/TableWithHeading";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../../config/httpReqUtils";
import type { IItem } from "../../interfaces";

const LoanPage = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["loans"],
    queryFn: getAllItems,
  });

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

  // filter data to get loan list
  const loanList =
    data?.data.filter((loan: IItem) => loan.type === "loan") || [];

  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <ActiveSection name="Loan" data={loanList} />
      <TableWithHeading
        title="My Loan"
        tvariant="simple"
        tableData={loanList}
      />
    </Box>
  );
};

export default LoanPage;
