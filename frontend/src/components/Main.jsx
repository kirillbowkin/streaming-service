import { Box } from '@chakra-ui/layout';
import { HStack } from '@chakra-ui/react';
import React from 'react';
import Chat from './Chat/Chat';
import VideoPlayer from './VideoPlayer';

function Main() {
  return (
    <Box as="main" w="full">
      <HStack h="80vh" spacing={0} px={2}>
        <VideoPlayer />
        <Chat />
      </HStack>
    </Box>
  );
}

export default Main;
