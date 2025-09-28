import { Box, Spinner } from "@chakra-ui/react";
import TableWithHeading from "../../components/shared/TableWithHeading";
import { useFellows } from "../../hooks/fellowsHook";
import AppAlert from "../../components/shared/ErrorAlert";
import FellowDetails from "../../components/FellowDetails";

const FellowDetailsPage = () => {
  // get fellow data
  const { isLoadingFellow, fellow, fellowError } = useFellows();
  // validate fellow data
  const fellowData = fellow?.data || {};

  if (isLoadingFellow)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <Spinner />
      </Box>
    );

  if (fellowError)
    return <AppAlert status="error" message={fellowError.message} />;

  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      {/* Fellow Details */}
      <FellowDetails fellow={fellowData} />

      {/* Shares breakdown table */}
      <TableWithHeading
        tvariant="simple"
        title="Shares Breakdown"
        tableData={fellowData.shares}
      />

      {/* Remaining shares table */}
      <TableWithHeading
        tvariant="striped"
        title="Remaining Shares"
        tableData={fellowData.shares}
        withButton
      />
    </Box>
  );
};

export default FellowDetailsPage;
