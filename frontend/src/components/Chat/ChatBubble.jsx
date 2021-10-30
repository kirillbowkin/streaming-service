import { Avatar } from '@chakra-ui/avatar';
import { Box, Text, VStack, HStack } from '@chakra-ui/layout';
import React from 'react';

function ChatBubble({ sender, message, me }) {
  const { name, uid, avatar } = sender;
  const isMe = uid === me;
  const alignment = isMe ? 'flex-end' : 'flex-start';
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = isMe ? 32 : 0;

  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      {isMe && (
        <HStack alignItems="flex-end">
          <Box
            bg={isMe ? 'blue.50' : 'gray.100'}
            px={4}
            py={2}
            maxW={72}
            color="black"
            borderTopLeftRadius={32}
            borderTopRightRadius={32}
            borderBottomLeftRadius={bottomLeftRadius}
            borderBottomRightRadius={bottomRightRadius}
          >
            {message}
          </Box>
          <Avatar size="sm" src={avatar} />
        </HStack>
      )}
      {!isMe && (
        <HStack alignItems="flex-end">
          <Avatar size="sm" src={avatar} />
          <Box
            bg={isMe ? 'blue.50' : 'gray.100'}
            px={4}
            py={2}
            maxW={72}
            color="black"
            borderTopLeftRadius={32}
            borderTopRightRadius={32}
            borderBottomLeftRadius={bottomLeftRadius}
            borderBottomRightRadius={bottomRightRadius}
          >
            {message}
          </Box>
        </HStack>
      )}
      <Text fontSize="md" color="gray">
        {name}
      </Text>
    </VStack>
  );
}

export default ChatBubble;
