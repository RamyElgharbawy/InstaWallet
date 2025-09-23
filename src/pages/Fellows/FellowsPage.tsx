import { Box, Divider, Spinner } from "@chakra-ui/react";
import TableWithHeading from "../../components/shared/TableWithHeading";
import ActiveSection from "../../components/shared/ActiveSection";
import { useQuery } from "@tanstack/react-query";
import { getAllFellows } from "../../config/httpReqUtils";
import AppAlert from "../../components/shared/ErrorAlert";

const FellowsPage = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["fellows"],
    queryFn: getAllFellows,
  });

  const fellowsList = data?.data || [];

  if (isLoading)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <Spinner />
        Loading Fellows...
      </Box>
    );

  if (isError)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <AppAlert status="error" code={error.status} message={error.message} />
      </Box>
    );

  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      <ActiveSection name="Fellow" data={fellowsList} />

      <Divider borderWidth={"thin"} mt={7} />

      <TableWithHeading
        tvariant="simple"
        title="My Fellows"
        tableData={fellowsList}
        withNavigate
      />
    </Box>
  );
};

export default FellowsPage;
