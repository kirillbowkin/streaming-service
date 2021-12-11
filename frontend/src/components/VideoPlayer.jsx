import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import OvenPlayer from 'ovenplayer';

function VideoPlayer() {
  useEffect(() => {
    OvenPlayer.create('player_id', {
      sources: [
        {
          label: 'source',
          type: 'dash',
          file: `http://${process.env.REACT_APP_IP_ADDRESS}:8080/app/stream/manifest_ll.mpd`,
        },
      ],
    });
  }, []);
  return (
    <Box h="full" w={[null, null, null, '75%']}>
      <div id="player_id"></div>
    </Box>
  );
}

export default VideoPlayer;
