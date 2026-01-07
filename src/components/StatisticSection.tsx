import {
  SimpleGrid,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Icon,
  Text,
  Divider,
} from "@chakra-ui/react";

import type { IconType } from "react-icons";
import { SiShopify } from "react-icons/si";
import { TbMoneybag, TbPigMoney, TbReportMoney } from "react-icons/tb";
import { useAuth } from "../hooks/auth/authHook";
import type { IFellow, IItem } from "../interfaces";

interface ICardProps {
  cardTitle: string;
  cardIcon: IconType;
  cardBody: string;
  cardStats: string;
}
// statistic Card
const StatisticCard = ({
  cardTitle,
  cardIcon,
  cardBody,
  cardStats,
}: ICardProps) => {
  return (
    <Card>
      <CardHeader
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading size="md"> {cardTitle}</Heading>
        <Icon fontSize="23" as={cardIcon} color={"green.500"} />
      </CardHeader>
      <CardBody>
        <Text>{cardBody}</Text>
      </CardBody>
      <Divider />
      <CardFooter>
        <Text color={"green.500"}>{cardStats}</Text>
      </CardFooter>
    </Card>
  );
};

const StatisticSection = () => {
  const { user } = useAuth();
  // filter user data
  const userData = user?.data || {};

  // calculate total fellows amount
  const totalFellowsAmount = userData.fellows.reduce(
    (sum: number, fellow: IFellow) => sum + fellow.amount,
    0
  );

  // calculate active installment
  const activeInstallment = userData.items.filter(
    (item: IItem) => item.type === "purchaseItem" && item.status === "remaining"
  );
  const activeInstallmentAmount = activeInstallment.reduce(
    (sum: number, ins: IItem) => sum + ins.monthlyAmount,
    0
  );

  // calculate active loans amount
  const activeLoans = userData.items.filter(
    (item: IItem) => item.type === "loan" && item.status === "remaining"
  );
  const activeLoansAmount = activeLoans.reduce(
    (sum: number, loan: IItem) => sum + loan.monthlyAmount,
    0
  );

  // statistic array
  const statsArray: Array<ICardProps> = [
    {
      cardTitle: "Wallet Balance",
      cardIcon: TbMoneybag,
      cardBody: `${userData.salary} $`,
      cardStats: "Total Balance",
    },
    {
      cardTitle: "Active Loans",
      cardIcon: TbReportMoney,
      cardBody: `${activeLoansAmount} $`,
      cardStats: "Total Loans Amount",
    },
    {
      cardTitle: "Active Fellows",
      cardIcon: TbPigMoney,
      cardBody: `${totalFellowsAmount} $`,
      cardStats: "Total Fellows Amount",
    },
    {
      cardTitle: "Active Installments",
      cardIcon: SiShopify,
      cardBody: `${activeInstallmentAmount} $`,
      cardStats: "Total Installments",
    },
  ];
  return (
    <SimpleGrid
      p={3}
      shadow={"2xl"}
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {statsArray.map((card, indx) => (
        <StatisticCard key={indx} {...card} />
      ))}
    </SimpleGrid>
  );
};

export default StatisticSection;
