import { Flex, VStack, Text, Card } from "@chakra-ui/react";
import type { IItem } from "../interfaces";
import { formatDate } from "../utils/dateFormat";

const ItemDetails = (itemData: IItem) => {
  return (
    <>
      <Card>
        <VStack p={3} align={"flex-start"}>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Title :</Text>
            <Text>{itemData.title}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Price :</Text>
            <Text>{itemData.price}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Purchase Date :</Text>
            <Text>{formatDate(itemData.purchaseDate)}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}>Number Of Months :</Text>
            <Text>{itemData.numberOfMonths}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> Monthly Amount :</Text>
            <Text>{itemData.monthlyAmount}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> start Date :</Text>
            <Text>{formatDate(itemData.startIn)}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> End Date :</Text>
            <Text>{formatDate(itemData.endIn)}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> Status :</Text>
            <Text>{itemData.status}</Text>
          </Flex>
        </VStack>
      </Card>
    </>
  );
};

export default ItemDetails;
