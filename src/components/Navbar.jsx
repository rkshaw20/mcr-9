import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { NavLink as ReachLink } from 'react-router-dom';
import {AiFillHome } from 'react-icons/ai';
import {MdExplore,MdPlaylistAdd,MdWatchLater } from 'react-icons/md';
import { ColorModeSwitcher } from "../ColorModeSwitcher";


const NavBar = () => {
    const bgColor = useColorModeValue('gray.300', 'gray.600');

  return (
    <Flex
      height="full"
      
      flexDir={{ base: "row", lg: "column" }}
      justify='flex-start'
      gap={4}
      p={{ base: "", lg: "1rem" }}
    >
        <Flex>
        <Link
              as={ReachLink}
              to="/"
              display="inline-flex"
              alignItems="center"
              _hover={{ base: '', lg: { bgColor: bgColor } }}
              rounded="3xl"
              w={{ base: '50px', lg: '170px' }}
              pl="1rem"
              _activeLink={{
                base: '',
                lg: {
                  transition: 'none',
                  fontWeight: 'bold',
                  bgColor: 'red.400',
                },
              }}
            >
              <Icon fontSize="1.5rem" as={AiFillHome} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Home
              </Text>
            </Link>
        </Flex>
        <Flex>
        <Link
              as={ReachLink}
              to="/exlpore"
              display="inline-flex"
              alignItems="center"
              _hover={{ base: '', lg: { bgColor: bgColor } }}
              rounded="3xl"
              w={{ base: '50px', lg: '170px' }}
              pl="1rem"
              _activeLink={{
                base: '',
                lg: {
                  transition: 'none',
                  fontWeight: 'bold',
                  bgColor: 'red.400',
                },
              }}
            >
              <Icon fontSize="1.5rem" as={MdExplore} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Explore
              </Text>
            </Link>
        </Flex>
        <Flex>
        <Link
              as={ReachLink}
              to="/Playlist"
              display="inline-flex"
              alignItems="center"
              _hover={{ base: '', lg: { bgColor: bgColor } }}
              rounded="3xl"
              w={{ base: '50px', lg: '170px' }}
              pl="1rem"
              _activeLink={{
                base: '',
                lg: {
                  transition: 'none',
                  fontWeight: 'bold',
                  bgColor: 'red.400',
                },
              }}
            >
              <Icon fontSize="1.5rem" as={MdPlaylistAdd} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Playlist
              </Text>
            </Link>
        </Flex>
        <Flex>
        <Link
              as={ReachLink}
              to="/WatchLater"
              display="inline-flex"
              alignItems="center"
              _hover={{ base: '', lg: { bgColor: bgColor } }}
              rounded="3xl"
              w={{ base: '50px', lg: '180px' }}
              pl="1rem"
              _activeLink={{
                base: '',
                lg: {
                  transition: 'none',
                  fontWeight: 'bold',
                  bgColor: 'red.400',
                },
              }}
            >
              <Icon fontSize="1.5rem" as={MdWatchLater} />
              <Text
                p={2}
                fontSize="1.3rem"
                display={{ base: 'none', lg: 'block' }}
              >
                Watch Later
              </Text>
            </Link>
        </Flex>
        <Flex>
        <ColorModeSwitcher justifySelf="flex-end" />

        </Flex>
    </Flex>
  );
};

export default NavBar;