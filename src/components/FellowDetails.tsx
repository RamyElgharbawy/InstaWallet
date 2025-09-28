import {
  Flex,
  VStack,
  Text,
  Card,
  HStack,
  Button,
  Heading,
} from "@chakra-ui/react";
import type { IFellow } from "../interfaces";
import { Link, useLocation } from "react-router-dom";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { ConfirmDialog } from "./shared/ConfirmDialog";
import { MdOutlineDeleteForever } from "react-icons/md";
import { formatDate } from "../utils/dateFormat";
import { useFellows } from "../hooks/fellowsHook";
interface IProps {
  fellow: IFellow;
}

const FellowDetails = ({ fellow }: IProps) => {
  // get current location
  const currentLocation = useLocation();
  // create navigation path
  const path = `${currentLocation.pathname}/edit`;

  const { isDeletingFellow, deleteFellow } = useFellows();

  return (
    <>
      {/* Heading */}
      <Flex mb={5} justify={"space-between"} px={"3"}>
        <VStack align={"flex-start"}>
          <Heading size={"md"}>{`${fellow.manager}'s Fellow`}</Heading>
          <Flex gap={2} align={"center"} textColor={"gray"}>
            {fellow.status === "remaining" ? (
              <GrStatusGoodSmall size={"13"} color="green" />
            ) : (
              <GrStatusGoodSmall size={"13"} color="red" />
            )}
            {fellow.status}
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
            title="Delete Fellow"
            description={`Are you sure you want to delete "${fellow.manager}"?  This action cannot be undone.`}
            confirmText="Delete"
            cancelText="Cancel"
            isLoading={isDeletingFellow}
            onConfirm={() => deleteFellow(fellow.id as string)}
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

      {/* Info Card */}
      <Card>
        <VStack p={3} align={"flex-start"}>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              Manager :
            </Text>
            <Text>{fellow.manager}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              Amount :
            </Text>
            <Text>{fellow.amount}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              {" "}
              start Date :
            </Text>
            <Text>{formatDate(fellow.startIn)}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              {" "}
              End Date :
            </Text>
            <Text>{formatDate(fellow.endIn)}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              Number Of Months :
            </Text>
            <Text>{fellow.numberOfMonths}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              {" "}
              Turn Month :
            </Text>
            <Text>{fellow.turnMonth}</Text>
          </Flex>
          {/* <Flex align={"center"} gap={2}>
            <Text fontWeight={"semibold"}> Status :</Text>
            <Text>{fellow.status}</Text>
          </Flex> */}
        </VStack>
      </Card>
    </>
  );
};

export default FellowDetails;
