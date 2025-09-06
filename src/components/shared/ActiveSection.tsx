/* eslint-disable @typescript-eslint/no-explicit-any */
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

import {
  MdDeleteOutline,
  MdMoney,
  MdOutlineAddBox,
  MdOutlineCheckBox,
  MdOutlineEdit,
} from "react-icons/md";
import { Link as RouterLink, useLocation } from "react-router-dom";

interface ISectionProps {
  name: string;
  data: any[];
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

const ActiveSection = ({ name, data }: ISectionProps) => {
  // get current location
  const currentLocation = useLocation();
  const path = `${currentLocation.pathname}/add${name}`;
  // // active cards data
  // const activeCards = data?.data || [];

  return (
    <Box p={0}>
      <Flex mb={2} justify={"space-between"} align={"center"}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Active {name}s
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
                to={"/user/details"}
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
          {/* Add New Button */}
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

      {/* Active Cards */}
      <SimpleGrid
        my={4}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      >
        {data.length > 0 ? (
          data.map((card) => {
            return (
              <Ticket
                key={card.id}
                subTitle={card.title || card.manager}
                title={card.price || card.amount}
              />
            );
          })
        ) : (
          <Text>No data available</Text>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ActiveSection;
