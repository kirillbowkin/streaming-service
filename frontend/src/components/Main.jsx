import { Box } from '@chakra-ui/layout';
import { HStack, Stack } from '@chakra-ui/react';
import React from 'react';
import Chat from './Chat/Chat';
import VideoPlayer from './VideoPlayer';

function Main() {
  return (
    <Box as="main" w="full">
      <Stack
        flexDir={['column', 'column', null, 'row']}
        h={['92vh', null, null, '80vh']}
        spacing={0}
        px={2}
      >
        <VideoPlayer />
        <Chat />
      </Stack>
    </Box>
  );
}

export default Main;
