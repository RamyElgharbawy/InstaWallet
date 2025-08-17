import {
  Box,
  Button,
  Card,
  Divider,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ShareTable from "./ShareTable";
import {
  MdDeleteOutline,
  MdMoney,
  MdOutlineAddBox,
  MdOutlineCheckBox,
  MdOutlineEdit,
} from "react-icons/md";
import { Link as RouterLink, useLocation } from "react-router-dom";
import TableWithHeading from "./TableWithHeading";

interface ISectionProps {
  name: string;
}
interface ITicketProps {
  title: string;
  subTitle: string;
}

const Ticket = ({ title, subTitle }: ITicketProps) => {
  return (
    <Flex as={Card} justify={"center"} align={"center"} direction={"column"}>
      <Text fontWeight={"bold"} fontSize={"lg"} p={2}>
        {title}
      </Text>
      <Divider />
      <Text fontSize={"sm"} p={2}>
        {subTitle}
      </Text>
    </Flex>
  );
};

// shares table header
const tHeadArray = [
  "Due Date",
  "Schedule",
  "Start Date",
  "End Date",
  "Amount",
  "Status",
  "Actions",
];

const ActiveSection = ({ name }: ISectionProps) => {
  const currentLocation = useLocation();
  const path = `${currentLocation.pathname}/add${name}`;

  return (
    <Box p={0}>
      <Flex mb={2} justify={"space-between"} align={"center"}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          {name} Name
        </Text>
        <HStack>
          {/* Edit Button Menu */}
          <Menu>
            <MenuButton
              as={Button}
              size={"sm"}
              leftIcon={<MdOutlineEdit color="green" />}
            >
              Edit
            </MenuButton>
            <MenuList>
              <MenuItem
                as={RouterLink}
                to={"/user/edit"}
                icon={<MdOutlineEdit size={17} />}
              >
                Edit
              </MenuItem>
              <MenuItem icon={<MdMoney size={17} />}>Pay Next Share</MenuItem>
              <MenuItem icon={<MdOutlineCheckBox size={17} />}>
                Mark As Complete
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<MdDeleteOutline size={17} />}>Delete</MenuItem>
            </MenuList>
          </Menu>

          <Button
            as={RouterLink}
            to={path}
            leftIcon={<MdOutlineAddBox color="green" size={20} />}
            size={"sm"}
          >
            Add New {name}
          </Button>
        </HStack>
      </Flex>
      <Text fontSize={"sm"}>Active</Text>

      <SimpleGrid
        my={4}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      >
        <Ticket subTitle="Total Shares" title="10" />
        <Ticket subTitle="Start Date" title="01/07/8/2025" />
        <Ticket subTitle="End Date" title="01/06/2026" />
        <Ticket subTitle="Next Share Date" title="01/09/2025" />
      </SimpleGrid>

      <TableWithHeading
        title="Shares Breakdown"
        tvariant="striped"
        theader={tHeadArray}
        withButton={false}
      />
    </Box>
  );
};

export default ActiveSection;
