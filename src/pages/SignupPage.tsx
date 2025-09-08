"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Alert,
  AlertDescription,
  AlertIcon,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../hooks/auth/authHook";

export default function SignupPage() {
  // auth-hook for signup mutations
  const { signup, isSigningUp, signupError, signupIsError } = useAuth();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // execute signup mutation hook
    signup(user);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features
          </Text>
        </Stack>
        {/* Signup Form */}
        <Box
          w={"sm"}
          as="form"
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          onSubmit={submitHandler}
        >
          <Stack spacing={4}>
            {/* Display error message from API */}
            {signupIsError && (
              <Alert status="error">
                <AlertIcon />
                <AlertDescription>
                  {signupError?.message || "Signup failed. Please try again."}
                </AlertDescription>
              </Alert>
            )}

            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={user.name}
                onChange={onChangeHandler}
                disabled={isSigningUp}
                placeholder="Enter your name"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={onChangeHandler}
                disabled={isSigningUp}
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
                  disabled={isSigningUp}
                  placeholder="Enter your password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    p={0}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl id="passwordConfirm" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input
                  name="passwordConfirm"
                  value={user.passwordConfirm}
                  onChange={onChangeHandler}
                  type={showPasswordConfirm ? "text" : "password"}
                  disabled={isSigningUp}
                  placeholder="confirm your password"
                />
                <InputRightElement h={"full"}>
                  <Button
                    p={0}
                    variant={"ghost"}
                    onClick={() =>
                      setShowPasswordConfirm(
                        (showPasswordConfirm) => !showPasswordConfirm
                      )
                    }
                  >
                    {showPasswordConfirm ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            {/* Submit Button */}
            <Stack spacing={10} pt={2}>
              <Button
                type="submit"
                disabled={isSigningUp}
                loadingText="Submitting"
                size="lg"
                bg={"green.400"}
                color={"white"}
                _hover={{
                  bg: "green.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Text
                  as={RouterLink}
                  to={"/login"}
                  color="green.500"
                  fontWeight={"semibold"}
                  textDecoration={"underline"}
                  _hover={{ color: "green.600" }}
                >
                  Login
                </Text>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
