import { Box, VStack, Text } from "@chakra-ui/layout";
import React from "react";

function Chat() {
  return (
    <Box bg="green" h="full" w="20%" overflowY="auto">
      <VStack>
        <Text>CHAT</Text>
        <Text>CHAT</Text>
      </VStack>
    </Box>
  );
}

export default Chat;
