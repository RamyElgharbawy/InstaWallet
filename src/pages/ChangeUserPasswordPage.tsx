/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Heading, useColorModeValue } from "@chakra-ui/react";
import { AppForm } from "../components/shared/AppForm";
import { useProfile } from "../hooks/profileHook";
import * as Yup from "yup";
import AppAlert from "../components/shared/ErrorAlert";

// validation schema
const validationSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .required("current password is required")
    .min(6, "Password must be at least 6 characters long"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[^a-zA-Z0-9]/, "Password must contain at least one symbol"),

  passwordConfirm: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

// form fields
const passFields = [
  {
    name: "currentPassword",
    label: "Current Password",
    type: "password",
  },
  {
    name: "password",
    label: "New Password",
    type: "password",
  },
  {
    name: "passwordConfirm",
    label: "Confirm New Password",
    type: "password",
  },
];

const ChangeUserPasswordPage = () => {
  const { isChangingPassword, changePassword, changingPasswordError } =
    useProfile();
  const handleSubmit = (values: any, actions: any) => {
    changePassword(values);
    actions.setSubmitting(false);
  };

  return (
    <center>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Heading size={"md"}>Change Your Password</Heading>
        <Divider my={"5"} />
        {changingPasswordError ? (
          <AppAlert message={changingPasswordError.message} status="Error" />
        ) : null}

        <AppForm
          fields={passFields}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          submitText="Change Password"
          loadingTxt="Changing..."
          loadingStatus={isChangingPassword}
        />
      </Box>
    </center>
  );
};

export default ChangeUserPasswordPage;
