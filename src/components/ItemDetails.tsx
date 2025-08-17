import { Flex, VStack, Text, Card } from "@chakra-ui/react";

const ItemDetails = () => {
  return (
    <>
      <Card>
        <VStack p={3} align={"flex-start"}>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Title :</Text>
            <Text>Item title</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Price :</Text>
            <Text>5000</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Purchase Date :</Text>
            <Text>15/12/2023</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Number Of Months :</Text>
            <Text>10</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> Monthly Amount :</Text>
            <Text>500</Text>
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
            <Text fontWeight={"semibold"}> Status :</Text>
            <Text>Completed</Text>
          </Flex>
        </VStack>
      </Card>
    </>
  );
};

export default ItemDetails;
