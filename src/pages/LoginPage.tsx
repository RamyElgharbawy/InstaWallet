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
  FormHelperText,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import {} from "@tanstack/react-query";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/auth/login";
import { loginUser } from "../config/httpReqUtils";

export default function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);

  // login mutation hook
  const loginMutation = useLogin();

  // handle on inputs Changes
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // Clear validation errors when user starts typing
    if (name === "email" && isEmail) setIsEmail(false);
    if (name === "password" && isPassword) setIsPassword(false);
  };

  // handle on form submit
  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    // basic validation
    if (!user.email && !user.password) {
      setIsEmail(true);
      setIsPassword(true);
      return;
    }

    // clear previous validation error
    setIsEmail(false);
    setIsPassword(false);

    // login mutation
    loginMutation.mutate(user);

    // // navigate into user dashboard
    // <Navigate to="/user" />;
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
            {loginMutation.isError && (
              <Alert status="error">
                <AlertIcon />
                <AlertDescription>
                  {loginMutation.error?.message ||
                    "Login failed. Please try again."}
                </AlertDescription>
              </Alert>
            )}

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={user.email}
                isInvalid={isEmail}
                onChange={onChangeHandler}
                type="email"
                disabled={loginMutation.isPending}
                placeholder="Enter your email"
              />
              {isEmail ? (
                <FormHelperText color={"red.500"}>
                  Please Enter your email address.
                </FormHelperText>
              ) : null}
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="password"
                  value={user.password}
                  isInvalid={isPassword}
                  onChange={onChangeHandler}
                  type={showPassword ? "text" : "password"}
                  disabled={loginMutation.isPending}
                  placeholder="Enter your password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    p={0}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                    disabled={loginMutation.isPending}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {isPassword ? (
                <FormHelperText color={"red.500"}>
                  Please enter your password.
                </FormHelperText>
              ) : null}
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox disabled={loginMutation.isPending}>
                  Remember me
                </Checkbox>
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
                isLoading={loginMutation.isPending}
                loadingText="Signing in..."
                disabled={loginMutation.isPending}
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
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
