import { Box, Flex, VStack, Text, Card } from "@chakra-ui/react";
import TableWithHeading from "../components/shared/TableWithHeading";

// shares table header
const tHeadArray = [
  "Due Date",
  "Schedule",
  "Start Date",
  "End Date",
  "Amount",
  "Status",
];

const FellowDetailsPage = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      {/* Active Fellow Details */}
      <Card>
        <VStack p={3} align={"flex-start"}>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Manager :</Text>
            <Text>Manager Name</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Amount :</Text>
            <Text>5000</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> start Date :</Text>
            <Text>01/01/2024</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> End Date :</Text>
            <Text>02/10/2024</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Number Of Months :</Text>
            <Text>10</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> Turn Month :</Text>
            <Text>5</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> Status :</Text>
            <Text>Completed</Text>
          </Flex>
        </VStack>
      </Card>

      {/* Shares Tables */}
      <TableWithHeading
        title="Shares Breakdown"
        tvariant="simple"
        theader={tHeadArray}
        withButton={false}
      />
      {/* Items Table */}
      <TableWithHeading
        title="Remaining Shares"
        tvariant="striped"
        theader={tHeadArray}
        withButton={true}
      />
    </Box>
  );
};

export default FellowDetailsPage;
