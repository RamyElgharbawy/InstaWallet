import { Button, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

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
          <MdDarkMode size={20} />
        ) : (
          <MdOutlineWbSunny />
        )}
      </Button>
    </>
  );
};

export default ColorModeToggleButton;
