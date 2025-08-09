"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import type { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
} from "react-icons/fc";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon }: CardProps) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function FeaturePage() {
  return (
    <Box id="feature" p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Why Choose InstaWallet?
        </Heading>
        <Text color={"gray.600"} fontSize={{ base: "sm", sm: "lg" }}>
          Experience the future of financial management with our comprehensive
          installment wallet system.
        </Text>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify={"Center"}>
          <Card
            heading={"Fellows Management"}
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            description={
              "Manage Your Fellow starts, ends, shares paid and remaining."
            }
            href={"#"}
          />
          <Card
            heading={"Smart Loans"}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={
              "Manage loans, automated payments, and personalized repayment schedules."
            }
            href={"#"}
          />
          <Card
            heading={"Scheduled Spending"}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={
              "Plan your expenses in advance, set up automatic payments, and maintain perfect budget control."
            }
            href={"#"}
          />
          <Card
            heading={"Purchase Management"}
            icon={<Icon as={FcManager} w={10} h={10} />}
            description={
              "Track all your purchases in one place, monitor installment progress, and never miss a payment deadline."
            }
            href={"#"}
          />
          <Card
            heading={"Financial Insights"}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={
              "Get detailed analytics on your spending patterns, payment history, and financial health with smart recommendations."
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
