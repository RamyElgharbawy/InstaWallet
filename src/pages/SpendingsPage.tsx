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
import ShareTable from "../components/shared/ShareTable";
import { Link as RouterLink, useLocation } from "react-router-dom";

// interface IProps {}

const spendingTableHeaders: Array<string> = [
  "Name",
  "Schedule Period",
  "Start Date",
  "Next Due Date",
  "Amount",
  "Status",
  "Actions",
];

// stats card
interface StatsCardProps {
  title: string;
  stat: string;
}

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
      <StatLabel fontWeight={"medium"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const SpendingsPage = () => {
  const currentLocation = useLocation();
  const path = `${currentLocation.pathname}/addSpending`;
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

      <ShareTable
        tvariant="striped"
        theader={spendingTableHeaders}
        withButton={true}
      />

      <Box pt={5}>
        <Text fontSize={"xl"} fontWeight={"bold"} pb={5}>
          Summary
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={"Total Active Schedules"} stat={"5"} />
          <StatsCard title={"Upcoming Payments"} stat={`1.400 $`} />
          <StatsCard title={"Overdue Payments"} stat={"00.0 $"} />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SpendingsPage;
