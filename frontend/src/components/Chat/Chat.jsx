import { Box, VStack, Input, IconButton, HStack } from '@chakra-ui/react';
import { IoMdSend } from 'react-icons/io';
import React, { useContext, useRef, useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatBubble from './ChatBubble';
import { UserContext } from '../../context/UserContext';
import SockJsClient from '../../utils/websocketClient';

function Chat() {
  const messageRef = useRef();
  const [messages, setMessages] = useState([]);
  const newMessageRef = useRef();

  const userContext = useContext(UserContext);
  const { user } = userContext;

  let clientRef;

  function onSend() {
    if (
      user?.loggedIn &&
      messageRef.current.value !== null &&
      messageRef.current.value !== ''
    ) {
      const message = {
        text: messageRef.current.value,
        sender: {
          name: user?.username,
          uid: user?.uid,
          avatar: user?.avatar,
        },
      };

      clientRef.sendMessage('/app/send', JSON.stringify(message));

      messageRef.current.value = '';
    }
  }

  return (
    <Box h="full" flexGrow={8}>
      <VStack h="full" pb={2}>
        <ChatHeader />
        <VStack w="full" px={6} overflowY="auto" flex={1}>
          {messages.map(({ text, id, sender }) => (
            <Box w="full" ref={newMessageRef}>
              <ChatBubble
                key={id}
                sender={sender}
                message={text}
                me={user?.uid}
              />
            </Box>
          ))}
        </VStack>
        {user?.loggedIn && (
          <HStack w="full" pl={4} pr={2} mt={4}>
            <Input
              variant="flushed"
              placeholder="Type your message"
              ref={messageRef}
              onKeyDown={e => {
                if ('Enter' === e.key) {
                  onSend();
                }
              }}
            />
            <IconButton
              colorScheme="blue"
              aria-label="send message"
              variant="ghost"
              icon={<IoMdSend />}
              onClick={onSend}
            />
          </HStack>
        )}
      </VStack>
      <SockJsClient
        ref={client => {
          clientRef = client;
        }}
        onMessage={msg => {
          setMessages([...messages, msg]);
          newMessageRef.current?.scrollIntoView();
        }}
      />
    </Box>
  );
}

export default Chat;
