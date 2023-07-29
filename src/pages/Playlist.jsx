import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
import { useDataContext } from '../context/DataContextProvider';
import VideoCard from '../components/VideoCard';
import { MdAdd, MdDelete } from 'react-icons/md';
import PlayListModal from '../components/PlaylistModal';
import PlaylistModal from '../components/PlaylistModal';
import { TYPE } from '../utils/constants';
import { Link as ReachLink } from 'react-router-dom';

const Playlist = () => {
  const { playlist, dispatch } = useDataContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleAddPlaylist = () => {
    onOpen();
  };
  const handleDeletePlaylist = id => {
    dispatch({ type: TYPE.DELETE_PLAYLIST, payload: id });
  };
  console.log(playlist);
  return (
    <Flex flexDir="column" m={2}>
      <Heading fontSize="3xl">PlayList</Heading>
      <Flex m={2} gap={2}>
        {playlist &&
          playlist.map(pl => (
            <Box
              key={pl.id}
              p={4}
              boxShadow="md"
              borderRadius="md"
              bg="red.300"
              minW="150px"
            >
              <Link as={ReachLink} to={`/playlist/${pl.id}`}>
                <Heading size="md">{pl.name}</Heading>
                <IconButton
                  icon={MdDelete()}
                  onClick={() => handleDeletePlaylist(pl.id)}
                />
              </Link>
            </Box>
          ))}
        <Flex>
          <IconButton
            fontSize="2rem"
            icon={MdAdd()}
            onClick={() => handleAddPlaylist()}
          />
          <PlaylistModal isOpen={isOpen} onClose={onClose} />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Playlist;
