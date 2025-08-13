"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

// import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose, MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import Logo from "../components/Logo";
import {} from "react-router-hash-link";

interface Props {
  children: React.ReactNode;
  to: string;
}

const Links = ["Feature", "How it Works"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as={Link}
      smooth
      to={props.to}
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <MdClose size={20} /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ md: "none", base: "flex" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {/* Navbar Links Section  */}
          <HStack spacing={8} alignItems={"center"}>
            <Logo />

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  to={`#${link.toLocaleLowerCase().replaceAll(" ", "-")}`}
                  key={link}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          {/* Right Section [userDropDown Menu, Theme Mode]  */}
          <Flex alignItems={"center"} gap={3}>
            {/* Login  */}
            <Text
              as={RouterLink}
              to={"/login"}
              display={{ md: "flex", base: "none" }}
              mr={2}
              p={2}
              rounded={10}
              alignItems={"center"}
              gap={1}
              bgColor={"green.500"}
              _hover={{ bgColor: "green.400" }}
            >
              Login
              {<TbLogin2 size={20} />}
            </Text>
            {/* User Profile */}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>User Profile</MenuItem>
                <MenuItem as={RouterLink} to={"/user"}>
                  Dashboard
                </MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
            {/* Theme Mode  */}
            <Stack direction={"row"} spacing={7}>
              <Button
                size="lg"
                variant="ghost"
                display={{ base: "none", md: "flex" }}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? <FaRegMoon /> : <MdOutlineWbSunny />}
              </Button>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
