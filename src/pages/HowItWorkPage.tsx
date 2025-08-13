"use client";

import type { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  Container,
} from "@chakra-ui/react";
import { FcApproval, FcBusinessman, FcDebt } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function HowItWorkPage() {
  return (
    <Box id="how-it-works" p={4} mt={20}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          How It Works
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Get started with InstaFlex in just three simple steps.
        </Text>
      </Stack>

      <SimpleGrid
        maxW={"5xl"}
        columns={{ base: 1, md: 3 }}
        spacing={10}
        my={12}
        mx={"auto"}
        px={20}
      >
        <Feature
          icon={<Icon as={FcBusinessman} w={10} h={10} />}
          title={"Create Your Account"}
          text={
            "Sign up with your email or social account, verify your identity, and set up your secure wallet in minutes...."
          }
        />
        <Feature
          icon={<Icon as={FcApproval} w={10} h={10} />}
          title={"Connect & Purchase"}
          text={
            "Invite fellows to your network, browse products, and make purchases with flexible installment options."
          }
        />
        <Feature
          icon={<Icon as={FcDebt} w={10} h={10} />}
          title={"Manage & Pay"}
          text={
            "Track your payments, manage loans, and enjoy automatic scheduling while building your financial future."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
