import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/DataContextProvider';
import {
  MdDelete,
  MdEdit,
  MdPlaylistAdd,
  MdWatchLater,
} from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { useState } from 'react';
import PlaylistModal from '../components/PlaylistModal';
import { TYPE } from '../utils/constants';
import  { isWatchList } from '../utils/utils';
import SinglePlaylistModal from '../components/SinglePlaylistModal';

const SingleVideo = () => {
  const { videoId } = useParams();
  const { videos, watchLater, playlist,notes, dispatch } = useDataContext();
  const [isPlaylistModalOpen, setIsPlaylistModalOpen] = useState(false);
  const [input, setInput] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const videoData = videos.find(item => item._id === +videoId);
  if (!videoData) {
    return;
  }

  const handleAddToPlaylistClick = () => {
    setIsPlaylistModalOpen(true);
  };
  const handleAddVideoToPlaylist = (playlistId, video) => {
    dispatch({
      type: TYPE.ADD_TO_PLAYLIST,
      payload: { playlistId, video },
    });
    setIsPlaylistModalOpen(false);
  };

  const isInWatchLater = isWatchList(watchLater, videoId);

  const handleAddToWatchLater = () => {
    isInWatchLater
      ? dispatch({ type: TYPE.REMOVE_FROM_WATCH_LATER, payload: videoData })
      : dispatch({ type: TYPE.ADD_TO_WATCH_LATER, payload: videoData });
  };

  const handleAddNotes = () => {
    onOpen();
  };
  const isNotePresent=notes?.find((note)=>note.id===videoData._id);

  const handleNoteSubmit = e => {
    e.preventDefault();
    if(isNotePresent){
      dispatch({type:TYPE.UPDATE_NOTE,payload:{id:videoData._id,text:input}})
    }else{
      dispatch({type:TYPE.ADD_NOTE, payload:{id:videoData._id,text:input}})
    }
    onClose();
  };
  const handleNoteEdit = note => {
    setInput(note.text);
    onOpen();
  };
  
  const handleNoteDelete = note => {
    dispatch({
      type: TYPE.DELETE_NOTE,
      payload: note.id,
    });
  };
  
  return (
    <Flex h="full">
      <Flex flexDir="column" m="1rem">
        <Flex w="700px" h="400px">
          {/* <VideoPlayer src={videoData.src} /> */}
          <iframe
            src={videoData.src}
            width="100%"
            height="400px"
            style={{ border: '1px solid black' }}
          ></iframe>
        </Flex>

        <Flex w="full" m={2} justifyContent="space-between">
          <Heading size="md">{videoData.title}</Heading>
          <Flex gap={2}>
            <Icon
              as={MdWatchLater}
              boxSize={7}
              onClick={handleAddToWatchLater}
              cursor="pointer"
            />
            <Icon
              as={MdPlaylistAdd}
              boxSize={7}
              onClick={handleAddToPlaylistClick}
              cursor="pointer"
            />
            <Icon
              as={AiFillEdit}
              boxSize={7}
              onClick={handleAddNotes}
              cursor="pointer"
            />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <form onSubmit={e => handleNoteSubmit(e, input)}>
                  <ModalBody>
                    <Input
                      isRequired
                      value={input}
                      onChange={e => setInput(e.target.value)}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button type="submit">Add New Note</Button>
                  </ModalFooter>
                </form>
              </ModalContent>
            </Modal>
            <SinglePlaylistModal
              isOpen={isPlaylistModalOpen}
              onClose={() => setIsPlaylistModalOpen(false)}
              video={videoData}
              playlists={playlist}
              onAddVideoToPlaylist={handleAddVideoToPlaylist}
            />
          </Flex>
        </Flex>
        <Divider />
        <Flex flexDir='column'  >
          <Heading>Notes</Heading>
          <Flex>
          {notes.filter(note => note.id === videoData._id).map((note)=>(
            <Flex key={note.id} w='full' justifyContent='space-between' h='3rem' > <Text size='md' >{note.text}</Text>
            <Flex gap={2} >
            <Icon as={MdEdit} onClick={() => handleNoteEdit(note)} />
          <Icon as={MdDelete} onClick={() => handleNoteDelete(note)} />
            </Flex>
            </Flex>
    ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default SingleVideo;

