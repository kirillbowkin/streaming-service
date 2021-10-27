import { Box, VStack, Text } from '@chakra-ui/layout';
import React from 'react';
import ChatHeader from './ChatHeader';

function Chat() {
  return (
    <Box bg="green" h="full" flexGrow={8} overflowY="auto">
      <VStack>
        <ChatHeader />
      </VStack>
    </Box>
  );
}

export default Chat;
