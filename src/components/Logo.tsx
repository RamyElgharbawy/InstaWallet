import { Text } from "@chakra-ui/react";
import { SiWalletconnect } from "react-icons/si";
import { Link as RouterLink } from "react-router-dom";

const Logo = () => {
  return (
    <Text
      as={RouterLink}
      to={"/"}
      color="green.500"
      fontWeight={"bold"}
      display={"flex"}
      gap={2}
      fontSize={"xl"}
    >
      <SiWalletconnect size={25} />
      InstaWallet
    </Text>
  );
};

export default Logo;
