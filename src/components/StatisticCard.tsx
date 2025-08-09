import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import type { IconType } from "react-icons";

interface ICardProps {
  cardTitle: string;
  cardIcon: IconType;
  cardBody: string;
  cardStats: string;
}

const StatisticCard = ({
  cardTitle,
  cardIcon,
  cardBody,
  cardStats,
}: ICardProps) => {
  return (
    <Card>
      <CardHeader display={"flex"}>
        <Heading size="md"> {cardTitle}</Heading>
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: "white",
          }}
          as={cardIcon}
        />
      </CardHeader>
      <CardBody>
        <Text>{cardBody}</Text>
      </CardBody>
      <CardFooter>
        <Text>{cardStats}</Text>
      </CardFooter>
    </Card>
  );
};

export default StatisticCard;
