import {
  Box,
  Menu,
  MenuButton,
  Avatar,
  Button,
  HStack,
  Center,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import React, { useContext, useEffect, useRef } from 'react';

import { UserContext } from '../../context/UserContext';

import { v4 as uuid } from 'uuid';

function ChatHeader() {
  const { colorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef();
  const finalRef = useRef();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const context = useContext(UserContext);
  const { user, setUser } = context;

  function logout() {
    setUser(null);
  }

  function login({ username }) {
    setUser({
      username: username,
      avatar: `https://avatars.dicebear.com/api/pixel-art-neutral/${
        Math.random() * 100
      }.svg`,
      uid: uuid(),
      loggedIn: true,
    });

    onClose();
  }

  return (
    <Box w="full" bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}>
      <HStack justifyContent="flex-start" p={2}>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
          >
            <Avatar size={'sm'} src={user?.avatar} />
          </MenuButton>
          <MenuList alignItems={'center'}>
            <span hidden={!user?.loggedIn}>
              <br />
              <Center>
                <Avatar size={'2xl'} src={user?.avatar} />
              </Center>
              <br />
              <Center>
                <p>{user?.username}</p>
              </Center>
              <br />
              <MenuDivider />
            </span>
            <MenuItem hidden={!user?.loggedIn} onClick={logout}>
              Logout
            </MenuItem>
            <MenuItem hidden={user?.loggedIn} onClick={onOpen}>
              Login
            </MenuItem>
          </MenuList>
        </Menu>
        <Box />
      </HStack>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(login)}>
            <ModalHeader>Login</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isInvalid={errors.username}>
                <FormLabel>Username</FormLabel>
                <Input
                  focu
                  id="username"
                  name="username"
                  ref={initialRef}
                  placeholder="Username"
                  autoFocus
                  {...register('username', {
                    required: 'Username is required',
                    minLength: {
                      value: 3,
                      message: 'Minimum length should be 3',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Maximium length should be 15',
                    },
                  })}
                />
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
              </FormControl>
              <ModalFooter>
                <Button
                  isLoading={isSubmitting}
                  colorScheme="blue"
                  mr={3}
                  onClick={onOpen}
                  type="submit"
                >
                  Login
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalBody>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default ChatHeader;
