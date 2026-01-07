/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Heading,
  Avatar,
  Box,
  Center,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { useProfile } from "../hooks/profileHook";
import * as Yup from "yup";
import { AppForm } from "../components/shared/AppForm";

// validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  salary: Yup.number()
    .transform((_, originalValue) => {
      return originalValue === "" ? undefined : Number(originalValue);
    })
    .typeError("Amount must be a number")
    .positive()
    .required(),
});

export default function UpdateUserProfilePage() {
  // auth-hook mutations
  const { user, updateProfile, isUpdatingProfile } = useProfile();

  // filter user data
  const userData = user?.data || {};

  const profileFields = [
    {
      name: "name",
      label: "Name",
      placeholder: "ex. Ahmed Gaza",
      defaultValue: userData.name,
    },
    {
      name: "salary",
      label: "Salary",
      type: "number",
      placeholder: "5000",
      defaultValue: userData.salary,
    },
  ];

  const handleSubmit = (values: any, actions: any) => {
    // cast values from input to convert string  input fields to numbers
    const castedValues = validationSchema.cast(values);
    // execute mutation function
    updateProfile(castedValues);
    actions.setSubmitting(false);
  };

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
        <AppForm
          fields={profileFields}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          submitText="Update Profile"
          loadingStatus={isUpdatingProfile}
          loadingTxt="Updating Profile..."
        />
      </Box>
    </Center>
  );
}
