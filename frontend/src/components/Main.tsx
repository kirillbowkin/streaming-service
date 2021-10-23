import { Box } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/react";
import React from "react";
import Chat from "./Chat";
import VideoPlayer from "./VideoPlayer";

function Main() {
  return (
    <Box as="main" w="full">
      <HStack bg="red" h="80vh">
        <VideoPlayer />
        <Chat />
      </HStack>
    </Box>
  );
}

export default Main;
