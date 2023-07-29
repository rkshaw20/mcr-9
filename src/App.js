import React from 'react';
import {
  ChakraProvider,
  Box,
  
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import VideoList from './pages/Explore';
import WatchLater from './pages/WatchLater';
import SingleVideo from './pages/SingleVideo';
import Explore from './pages/Explore';
import Playlist from './pages/Playlist';
import CategoryPage from './pages/CategoryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element:(<RootLayout/>) ,
    children:[
      {index:true, element:<Home/>},
      {path:'/exlpore', element:<Explore/>},
      {path:'/home/:categoryName', element:<CategoryPage/>},
      {path:'/playlist', element:<Playlist/>},

      {path:'/watchLater', element:<WatchLater/>},
      {path:'/video/:videoId', element:<SingleVideo/>}
    ]
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}/>
      {/* <Box textAlign="center" fontSize="xl">
        <Flex h="full">
          <ColorModeSwitcher justifySelf="flex-end" />
          <Home />
        </Flex>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
