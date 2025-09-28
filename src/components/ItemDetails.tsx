import {
  Flex,
  VStack,
  Text,
  Card,
  Textarea,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import type { IItem } from "../interfaces";
import { formatDate } from "../utils/dateFormat";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";
import { Link, useLocation } from "react-router-dom";
import { useItems } from "../hooks/itemsHook";
import { ConfirmDialog } from "./shared/ConfirmDialog";

const ItemDetails = (itemData: IItem) => {
  // get current location
  const currentLocation = useLocation();
  // create navigation path
  const path = `${currentLocation.pathname}/edit`;

  const { deleteItem, isDeleting } = useItems();

  return (
    <>
      {/* Heading */}
      <Flex mb={5} justify={"space-between"} px={"3"}>
        <VStack align={"flex-start"}>
          <Heading size={"md"}>{itemData.title}</Heading>
          <Flex gap={2} align={"center"} textColor={"gray"}>
            {itemData.status === "remaining" ? (
              <GrStatusGoodSmall size={"13"} color="green" />
            ) : (
              <GrStatusGoodSmall size={"13"} color="red" />
            )}
            {itemData.status}
          </Flex>
        </VStack>
        <HStack>
          <Button
            as={Link}
            to={path}
            leftIcon={<FaEdit />}
            variant={"outline"}
            size={"sm"}
            colorScheme="green"
          >
            Edit
          </Button>

          <ConfirmDialog
            title="Delete Item"
            description={`Are you sure you want to delete "${itemData.title}"?  This action cannot be undone.`}
            confirmText="Delete"
            cancelText="Cancel"
            isLoading={isDeleting}
            onConfirm={() => deleteItem(itemData.id as string)}
            trigger={
              <Button
                leftIcon={<MdOutlineDeleteForever size={"17"} />}
                variant={"outline"}
                size={"sm"}
                colorScheme="red"
              >
                Delete
              </Button>
            }
          />
        </HStack>
      </Flex>

      {/* Info Cards */}
      <Card
        direction={"row"}
        variant={"outline"}
        gap={2}
        p={2}
        justify={"space-between"}
      >
        <Card w={"50%"}>
          <VStack p={3} align={"flex-start"}>
            <Flex align={"center"} gap={2}>
              <Text textColor={"gray"} fontWeight={"semibold"}>
                Price :
              </Text>
              <Text>{itemData.price}</Text>
            </Flex>

            <Flex align={"center"} gap={2}>
              <Text textColor={"gray"} fontWeight={"semibold"}>
                Installment Months :
              </Text>
              <Text>{itemData.numberOfMonths}</Text>
            </Flex>
            <Flex align={"center"} gap={2}>
              <Text textColor={"gray"} fontWeight={"semibold"}>
                {" "}
                Monthly Amount :
              </Text>
              <Text>{itemData.monthlyAmount}</Text>
            </Flex>
          </VStack>
        </Card>

        <Card w={"50%"}>
          <VStack p={3} align={"flex-start"}>
            <Flex align={"center"} gap={2}>
              <Text textColor={"gray"} fontWeight={"semibold"}>
                Purchase Date :
              </Text>
              <Text>{formatDate(itemData.purchaseDate)}</Text>
            </Flex>
            <Flex align={"center"} gap={2}>
              <Text textColor={"gray"} fontWeight={"semibold"}>
                {" "}
                Start Date :
              </Text>
              <Text>{formatDate(itemData.startIn)}</Text>
            </Flex>
            <Flex align={"center"} gap={2}>
              <Text textColor={"gray"} fontWeight={"semibold"}>
                {" "}
                End Date :
              </Text>
              <Text>{formatDate(itemData.endIn)}</Text>
            </Flex>
          </VStack>
        </Card>
      </Card>

      {itemData.notes && itemData.notes != "" ? (
        <Flex direction={"column"}>
          <Text my={2} fontWeight={"semibold"}>
            {" "}
            Notes :
          </Text>
          <Textarea _hover={{ cursor: "text" }} isDisabled>
            {itemData.notes}
          </Textarea>
        </Flex>
      ) : null}
    </>
  );
};

export default ItemDetails;
