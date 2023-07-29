import { Grid, GridItem, useColorModeValue } from '@chakra-ui/react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Grid
      bg={useColorModeValue('gray.50', 'gray.800')}
      minH="100dvh"
      h='full'
      templateColumns={
        { 
            // base: 'auto 1fr',
       lg: '1fr 4fr' }}
      templateRows={{
        // base: 'auto calc(100dvh - 56.8px - 82.4px) auto',
        // lg: '56.8px calc(100dvh - 56.8px)',
      }}
      templateAreas={{
        // base: `"main main main"
        //       "nav nav nav"`,
        lg: `"nav main"`,
      }}
    >
     
      <GridItem as={'nav'} area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        scrollBehavior="smooth"
        as={'main'}
        area={'main'}
        overflowY="scroll"
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};
export default RootLayout;
