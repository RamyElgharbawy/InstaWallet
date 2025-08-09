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
import ShareTable from "./shared/ShareTable";
import {
  MdDeleteOutline,
  MdMoney,
  MdOutlineAddBox,
  MdOutlineCheckBox,
  MdOutlineEdit,
} from "react-icons/md";

// interface IActiveSectionProps {
//   name: string;
// }
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
const tHeadArray: Array<string> = ["Due Date", "Amount", "Status"];

const ActiveSection = () => {
  return (
    <Box p={3} shadow={"lg"}>
      <Flex mb={2} justify={"space-between"} align={"center"}>
        <Text fontSize={"2xl"} fontWeight={"semibold"}>
          Fellow Name
        </Text>
        <HStack>
          <Menu>
            <MenuButton
              as={Button}
              size={"sm"}
              leftIcon={<MdOutlineEdit color="green" />}
            >
              Edit
            </MenuButton>
            <MenuList>
              <MenuItem icon={<MdOutlineEdit size={17} />}>Edit</MenuItem>
              <MenuItem icon={<MdMoney size={17} />}>Pay Next Share</MenuItem>
              <MenuItem icon={<MdOutlineCheckBox size={17} />}>
                Mark As Complete
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<MdDeleteOutline size={17} />}>Delete</MenuItem>
            </MenuList>
          </Menu>

          <Button
            leftIcon={<MdOutlineAddBox color="green" size={20} />}
            size={"sm"}
          >
            Add New
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

      <Flex flexDirection={"column"} gap={2}>
        <Text fontSize={"xl"} fontWeight={"semibold"} mb={2}>
          Shares Breakdown
        </Text>
        <ShareTable tvariant="striped" theader={tHeadArray} />
      </Flex>
    </Box>
  );
};

export default ActiveSection;
