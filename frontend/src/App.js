import * as React from 'react';
import { ChakraProvider, Box, theme, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import Main from './components/Main';
import UserContextProvider from './context/UserContext';

export const App = () => (
  <ChakraProvider theme={theme}>
    <UserContextProvider>
      <VStack>
        <Header />
        <Main />
      </VStack>
    </UserContextProvider>
  </ChakraProvider>
);
