import { Box, Button, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { SiShopify } from "react-icons/si";
import { TbPigMoney } from "react-icons/tb";
import { Link as RouterLink } from "react-router-dom";

interface IAButtonProps {
  icon: IconType;
  title: string;
  path: string;
}

const ActionButton = ({ icon, title, path }: IAButtonProps) => {
  return (
    <Button
      as={RouterLink}
      to={path}
      display={"flex"}
      flexWrap={"wrap"}
      h={"28"}
      colorScheme="green"
    >
      <Icon fontSize={"4xl"} as={icon} w={"100%"} />
      <Text textAlign={"center"} w={"full"}>
        {title}
      </Text>
    </Button>
  );
};

const buttonArray: Array<IAButtonProps> = [
  { icon: SiShopify, title: "Add New Item", path: "/user/items/addItem" },
  { icon: FcMoneyTransfer, title: "Add New Loan", path: "/user/loan/addLoan" },
  {
    icon: TbPigMoney,
    title: "Add New Fellow",
    path: "/user/fellows/addFellow",
  },
  {
    icon: FaMoneyBillTransfer,
    title: "Add New Spending",
    path: "/user/spendings/addSpending",
  },
];

const QuickActionSection = () => {
  return (
    <Box mt={5} p={3} rounded={"lg"} shadow={"2xl"}>
      <Text mb={3} fontSize={"xl"} fontWeight={"bold"}>
        Quick Actions
      </Text>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {buttonArray.map((button, indx) => (
          <ActionButton key={indx} {...button} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default QuickActionSection;
