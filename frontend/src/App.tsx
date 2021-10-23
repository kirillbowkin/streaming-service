import * as React from "react";
import { ChakraProvider, Box, theme, VStack } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack>
      <Header />
      <Main />
    </VStack>
  </ChakraProvider>
);
