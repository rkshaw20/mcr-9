import React from 'react';
import {
  ChakraProvider,
  Box,
  
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex h="full">
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
          <Home />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
