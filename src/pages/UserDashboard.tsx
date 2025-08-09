import { Box } from "@chakra-ui/react";
import StatisticSection from "../components/StatisticSection";
import QuickActionSection from "../components/QuickActionSection";
import PaymentTransactionSection from "../components/PaymentTransactionSection";

const UserDashboard = () => {
  return (
    <Box ml={{ base: 0, md: 60 }} p="4">
      <StatisticSection />
      <QuickActionSection />
      <PaymentTransactionSection />
    </Box>
  );
};

export default UserDashboard;
