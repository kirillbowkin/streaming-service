import { Box, HStack, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function Header() {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="header"
      bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}
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
