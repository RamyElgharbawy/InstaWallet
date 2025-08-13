import { Button, useColorMode } from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
const ColorModeToggleButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        p={0}
        size="lg"
        variant="ghost"
        display={{ base: "none", md: "flex" }}
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? (
          <IoMoonOutline size={20} />
        ) : (
          <IoSunnyOutline />
        )}
      </Button>
    </>
  );
};

export default ColorModeToggleButton;
