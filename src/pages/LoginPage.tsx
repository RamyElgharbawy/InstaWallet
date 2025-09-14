"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import {} from "@tanstack/react-query";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/auth/authHook";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  // login mutation hook
  const { login, isLoggingIn, loginIsError, loginError } = useAuth();

  // handle on inputs Changes
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // handle on form submit
  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // login mutation
    login(user);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features
          </Text>
        </Stack>
        <Box
          as="form"
          onSubmit={submitHandler}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            {/* Display error message from API */}
            {loginIsError && (
              <Alert status="error">
                <AlertIcon />
                <AlertDescription>
                  {loginError?.message || "Login failed. Please try again."}
                </AlertDescription>
              </Alert>
            )}

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                type="email"
                disabled={isLoggingIn}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={user.password}
                  onChange={onChangeHandler}
                  type={showPassword ? "text" : "password"}
                  disabled={isLoggingIn}
                  placeholder="Enter your password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    p={0}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    disabled={isLoggingIn}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox disabled={isLoggingIn}>Remember me</Checkbox>
                <Text
                  color={"green.400"}
                  cursor={"pointer"}
                  _hover={{ color: "green.500" }}
                >
                  Forgot password?
                </Text>
              </Stack>

              <Button
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
                type="submit"
                isLoading={isLoggingIn}
                loadingText="Signing in..."
                disabled={isLoggingIn}
                size="lg"
              >
                Sign in
              </Button>
            </Stack>
            <Stack>
              <Text align={"center"}>
                Don`t have an account? please{" "}
                <Text
                  as={Link}
                  to={"/signup"}
                  color="green.500"
                  fontWeight={"semibold"}
                  textDecoration={"underline"}
                  _hover={{ color: "green.600" }}
                >
                  SignUp
                </Text>
              </Text>
              <Text align={"center"}>
                Or go to{" "}
                <Text
                  as={Link}
                  to={"/"}
                  color="green.500"
                  fontWeight={"semibold"}
                  textDecoration={"underline"}
                  _hover={{ color: "green.600" }}
                >
                  Home Page
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
