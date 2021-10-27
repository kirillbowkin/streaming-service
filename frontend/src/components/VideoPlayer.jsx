import { Box } from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  const ip = require('ip');

  return (
    <Box h="full" flexGrow={1}>
      <ReactPlayer
        url={`http://${ip.address()}/hls/test.m3u8`}
        width="100%"
        height="100%"
        controls={true}
        config={{
          file: {
            forceHLS: true,
          },
        }}
      />
    </Box>
  );
}

export default VideoPlayer;
