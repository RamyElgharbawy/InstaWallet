import {
  Button,
  Flex,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Box,
  Text,
  Divider,
  Card,
} from "@chakra-ui/react";

const UserProfilePage = () => {
  return (
    <Box
      ml={{ base: 0, md: 60 }}
      p={4}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Avatar size={"xl"} mb={3} />
      <Divider />

      <Card mt={3} px={3}>
        <Flex my={2} justify={"center"} gap={2} flexDir={"column"}>
          <Text fontWeight={"semibold"}>User Name</Text>
          <Text>Ramy Elgharbawy</Text>
        </Flex>
        <Flex my={2} justify={"center"} gap={2} flexDir={"column"}>
          <Text fontWeight={"semibold"}>Email</Text>
          <Text>yourEmail@email.com</Text>
        </Flex>
      </Card>
    </Box>
  );
};

export default UserProfilePage;
