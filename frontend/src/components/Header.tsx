import {
  ColorMode,
  ColorModeContextType,
  useColorMode,
} from "@chakra-ui/color-mode";
import { Box, HStack } from "@chakra-ui/layout";
import React from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

function Header() {
  const { colorMode }: ColorModeContextType = useColorMode();

  return (
    <Box
      as="header"
      bg={colorMode === "light" ? "gray.300" : "gray.700"}
      p={2}
      w="full"
    >
      <HStack justifyContent="end" justifyItems="center">
        <ColorModeSwitcher />
      </HStack>
    </Box>
  );
}

export default Header;
