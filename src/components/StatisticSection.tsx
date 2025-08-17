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
// statistic array
const statsArray: Array<ICardProps> = [
  {
    cardTitle: "Wallet Balance",
    cardIcon: TbMoneybag,
    cardBody: "202054 $",
    cardStats: "Total Balance",
  },
  {
    cardTitle: "Active Loans",
    cardIcon: TbReportMoney,
    cardBody: "202054 $",
    cardStats: "Solfa",
  },
  {
    cardTitle: "Active Fellows",
    cardIcon: TbPigMoney,
    cardBody: "202054 $",
    cardStats: "Hassan Fellow",
  },
  {
    cardTitle: "Active Installments",
    cardIcon: SiShopify,
    cardBody: "202054 $",
    cardStats: "IPhone 16",
  },
];

const StatisticSection = () => {
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
