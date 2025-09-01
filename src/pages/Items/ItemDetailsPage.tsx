import { Box, Flex, Text } from "@chakra-ui/react";
import ItemDetails from "../../components/ItemDetails";
import { useQuery } from "@tanstack/react-query";
import ShareTable from "../../components/shared/ShareTable";
import { getItem } from "../../config/httpReqUtils";

const ItemDetailsPage = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["items"],
    queryFn: getItem,
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

  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      <ItemDetails {...data?.data} />

      {/* Shares breakdown table */}
      <Flex flexDirection={"column"} gap={2} my={5}>
        <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
          Shares Breakdown
        </Text>
        <ShareTable
          tvariant="simple"
          withButton={false}
          tableData={data?.data.shares}
        />
      </Flex>

      {/* Remaining shares table */}
      <Flex flexDirection={"column"} gap={2} my={5}>
        <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
          Remaining Shares
        </Text>
        <ShareTable
          tvariant="striped"
          withButton={true}
          tableData={data?.data.shares}
        />
      </Flex>
    </Box>
  );
};

export default ItemDetailsPage;
