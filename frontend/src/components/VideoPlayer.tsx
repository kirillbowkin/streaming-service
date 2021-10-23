import { Box } from "@chakra-ui/layout";
import React, { RefObject, useRef } from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <Box h="full" flexGrow={1}>
      <ReactPlayer
        url="http://localhost/hls/test.m3u8"
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
