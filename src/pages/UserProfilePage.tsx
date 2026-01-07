"use client";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { useProfile } from "../hooks/profileHook";
import { Link, useLocation } from "react-router-dom";

export default function UserProfilePage() {
  // get current location
  const currentLocation = useLocation();

  // auth-hook mutations
  const { user } = useProfile();

  // filter user data
  const userData = user?.data || {};

  // create navigation path
  const editPath = `${currentLocation.pathname}/edit/${userData.id}`;
  const passPath = `${currentLocation.pathname}/changePassword/${userData.id}`;

  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={
            "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          }
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {userData.name}
        </Heading>

        <Divider my={5} />

        {/* User info */}
        <Stack direction={"row"} px={1} spacing={"4"}>
          <VStack alignItems={"flex-start"}>
            <Text textColor={"green.500"} fontWeight={"bold"}>
              Email
            </Text>
            <Text textColor={"green.500"} fontWeight={"bold"}>
              Salary
            </Text>
            <Text textColor={"green.500"} fontWeight={"bold"}>
              Fellows
            </Text>
            <Text textColor={"green.500"} fontWeight={"bold"}>
              Purchasing
            </Text>
            <Text textColor={"green.500"} fontWeight={"bold"}>
              Spendings
            </Text>
            <Text textColor={"green.500"} fontWeight={"bold"}>
              Net Salary
            </Text>
          </VStack>
          <VStack alignItems={"self-start"}>
            <Text fontFamily={"cursive"}>{userData.email}</Text>
            <Text fontFamily={"cursive"}>{userData.salary}</Text>
            <Text fontFamily={"cursive"}>{userData.fellows.length}</Text>
            <Text fontFamily={"cursive"}>{userData.items.length}</Text>
            <Text fontFamily={"cursive"}>{userData.spending.length}</Text>
            <Text fontFamily={"cursive"}>{userData.netSalary}</Text>
          </VStack>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            as={Link}
            to={passPath}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
          >
            Change Password
          </Button>
          <Button
            as={Link}
            to={editPath}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            _hover={{
              bg: "green.500",
            }}
          >
            Edit
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
