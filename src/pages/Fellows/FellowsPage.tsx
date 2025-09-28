import { Box, Divider } from "@chakra-ui/react";
import TableWithHeading from "../../components/shared/TableWithHeading";
import ActiveSection from "../../components/shared/ActiveSection";
import AppAlert from "../../components/shared/ErrorAlert";
import { useFellows } from "../../hooks/fellowsHook";

const FellowsPage = () => {
  // get fellows data
  const { isLoadingFellows, fellowsList, isFellowsError, fellowsError } =
    useFellows();
  // validate fellows data
  const fellows = fellowsList?.data || [];

  if (isLoadingFellows)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <AppAlert status="info" message=" Loading Fellows..." />
      </Box>
    );

  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      <ActiveSection name="Fellow" data={fellows} />

      <Divider borderWidth={"thin"} mt={7} />

      {isFellowsError && fellowsError ? (
        <AppAlert
          status="error"
          message={fellowsError.message}
          code={fellowsError.status}
        />
      ) : (
        <TableWithHeading
          tvariant="simple"
          title="My Fellows"
          tableData={fellows}
          withNavigate
        />
      )}
    </Box>
  );
};

export default FellowsPage;
