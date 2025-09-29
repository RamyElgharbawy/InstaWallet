import {
  Flex,
  VStack,
  Text,
  Card,
  HStack,
  Button,
  Heading,
  Box,
  Spinner,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useSpendings } from "../../hooks/spendingHook";
import { ConfirmDialog } from "../../components/shared/ConfirmDialog";
import { formatDate } from "../../utils/dateFormat";
import AppAlert from "../../components/shared/ErrorAlert";

const SpendingDetailsPage = () => {
  // get current location
  const currentLocation = useLocation();
  // create navigation path
  const path = `${currentLocation.pathname}/edit`;

  const {
    isDeletingSpending,
    deleteSpending,
    isLoadingSpending,
    spending,
    spendingError,
  } = useSpendings();

  // validate spending data
  const spendingData = spending?.data || {};

  if (isLoadingSpending) {
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <Spinner />
      </Box>
    );
  }
  if (spendingError) {
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        <AppAlert
          status="error"
          message={spendingError.message}
          code={spendingError.status}
        />
      </Box>
    );
  }

  return (
    <Box ml={{ base: 0, md: 60 }} p={4}>
      {/* Heading */}
      <Flex mb={5} justify={"space-between"} px={"3"}>
        <VStack align={"flex-start"}>
          <Heading size={"md"}>{`${spendingData.name} -  Schedule`}</Heading>
          <Flex gap={2} align={"center"} textColor={"gray"}>
            {spendingData.status === "remaining" ? (
              <GrStatusGoodSmall size={"13"} color="green" />
            ) : (
              <GrStatusGoodSmall size={"13"} color="red" />
            )}
            {spendingData.status}
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
            title="Delete Spending"
            description={`Are you sure you want to delete "${spendingData.name}"?  This action cannot be undone.`}
            confirmText="Delete"
            cancelText="Cancel"
            isLoading={isDeletingSpending}
            onConfirm={() => deleteSpending(spendingData.id as string)}
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
              Name :
            </Text>
            <Text>{spendingData.name}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              Amount :
            </Text>
            <Text>{spendingData.amount}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              Schedule :
            </Text>
            <Text>{spendingData.schedule}</Text>
          </Flex>
          <Flex align={"center"} gap={2}>
            <Text textColor={"gray"} fontWeight={"semibold"}>
              {" "}
              start Date :
            </Text>
            <Text>{formatDate(spendingData.startIn)}</Text>
          </Flex>
        </VStack>
      </Card>
    </Box>
  );
};

export default SpendingDetailsPage;
