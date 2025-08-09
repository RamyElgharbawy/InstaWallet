import { Card, Grid, Heading, Icon, Text, VStack } from "@chakra-ui/react";

// interface IProps{

// }

// transactionCard
const TransactionCard = () => {
  return (
    <Card
      gap={2}
      p={3}
      flexDir={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Icon fontSize={"xl"} />
      <Text>Transaction details................</Text>
      <Text>$ Price</Text>
    </Card>
  );
};

const PaymentTransactionSection = () => {
  return (
    <Grid
      mt={5}
      p={3}
      gap={3}
      autoFlow={{ base: "row", sm: "column" }}
      shadow={"2xl"}
    >
      <VStack
        p={3}
        bgColor={"chakra-body-bg._dark"}
        rounded={"lg"}
        shadow={"dark-lg"}
      >
        <Heading my={3} fontSize={"lg"} color={"chakra-body-bg._dark"}>
          Recent Transactions
        </Heading>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </VStack>
      <VStack
        p={3}
        shadow={"dark-lg"}
        bgColor={"chakra-body-bg._dark"}
        rounded={"lg"}
      >
        <Heading my={3} fontSize={"lg"} color={"chakra-body-bg._dark"}>
          Upcoming Payments
        </Heading>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </VStack>
    </Grid>
  );
};

export default PaymentTransactionSection;
