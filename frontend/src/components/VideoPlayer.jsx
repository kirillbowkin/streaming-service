import { Box } from '@chakra-ui/react';
import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <Box h="full" w="80%">
      <ReactPlayer
        url={`http://${process.env.REACT_APP_IP_ADDRESS}/hls/test.m3u8`}
        width="100%"
        height="100%"
        controls={true}
        pip={false}
        config={{
          file: {
            forceHLS: true,
            // Hide three dots menu
            attributes: {
              controlsList: 'nodownload noremoteplayback noplaybackrate',
            },
          },
        }}
      />
    </Box>
  );
}

export default VideoPlayer;
