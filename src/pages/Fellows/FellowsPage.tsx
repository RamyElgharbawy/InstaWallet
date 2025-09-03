import { Box } from "@chakra-ui/react";
import TableWithHeading from "../../components/shared/TableWithHeading";
import ActiveSection from "../../components/shared/ActiveSection";
import { useQuery } from "@tanstack/react-query";
import { getAllFellows } from "../../config/httpReqUtils";

const FellowsPage = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["fellows"],
    queryFn: getAllFellows,
  });

  const fellowsList = data?.data || [];

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
    <Box ml={{ base: 0, md: 60 }} p={4}>
      <ActiveSection name="Fellow" data={fellowsList} />
      <TableWithHeading
        tvariant="simple"
        title="My Fellows"
        tableData={fellowsList}
      />
    </Box>
  );
};

export default FellowsPage;
