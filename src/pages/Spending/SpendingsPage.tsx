import {
  Box,
  Button,
  Flex,
  HStack,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiOutlineFilter, HiSortDescending } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import { Link as RouterLink, useLocation } from "react-router-dom";
import TableWithHeading from "../../components/shared/TableWithHeading";
import { useQuery } from "@tanstack/react-query";
import { getSpendingList } from "../../config/httpReqUtils";
import type { ISpending } from "../../interfaces";
import {
  calculateNextDueDate,
  isOverdue,
} from "../../utils/calculateNextDueDate";

interface StatsCardProps {
  title: string;
  stat: string;
}

// stats card
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      // bgColor={useColorModeValue("gray.100", "gray.700")}
    >
      <StatLabel color={"green.600"} fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const SpendingsPage = () => {
  // get current path
  const currentLocation = useLocation();
  const path = `${currentLocation.pathname}/addSpending`;

  // get data from api
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["spendings"],
    queryFn: getSpendingList,
  });
  const spendingList = data?.data || [];

  // get active schedule
  const activeSpendings = spendingList.filter(
    (active: ISpending) => active.status === "remaining"
  );

  // calculate total due amount
  const totalUpcomingPayments = activeSpendings.reduce(
    (sum: number, spending: ISpending) => sum + spending.amount,
    0
  );

  // const overDue = nextDueDates.filter((date: Date) => !isOverdue(date));
  const overDues = activeSpendings.filter((sp: ISpending) => {
    const nextDueDate = calculateNextDueDate(sp.startIn);
    const overDue = isOverdue(nextDueDate);
    return overDue;
  });

  // get overDue total amount
  const overDueTotalAmount = overDues.reduce(
    (sum: number, spending: ISpending) => sum + spending.amount,
    0
  );

  if (isLoading)
    return (
      <Box ml={{ base: 0, md: 60 }} p={4}>
        Loading spendings...
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
      <Flex justify={"space-between"} align={"center"}>
        <Text fontSize={"2xl"} fontWeight={"semibold"} mb={8}>
          Spending Schedule
        </Text>
        <Button as={RouterLink} to={path} size={"sm"}>
          Add New Schedule
        </Button>
      </Flex>
      <HStack mb={2} p={2} justifyContent={"space-between"}>
        <Flex gap={2}>
          <HiSortDescending size={25} />
          <HiOutlineFilter size={25} />
        </Flex>
        <Button size={"sm"} leftIcon={<MdOutlineSearch />}>
          Search
        </Button>
      </HStack>

      {/* Spending Table */}
      <TableWithHeading title="" tvariant="simple" tableData={spendingList} />

      {/* Summary section */}
      <Box pt={5}>
        <Text fontSize={"xl"} fontWeight={"bold"} pb={5}>
          Summary
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={"Total Active Schedules"}
            stat={activeSpendings.length || 0}
          />
          <StatsCard
            title={"Upcoming Payments"}
            stat={`${totalUpcomingPayments} $`}
          />
          <StatsCard
            title={"Overdue Payments"}
            stat={`${overDueTotalAmount} $`}
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SpendingsPage;
