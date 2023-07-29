import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  Box,
  Text,
} from '@chakra-ui/react';
import PlaylistModal from './PlaylistModal';

const SinglePlaylistModal = ({
  isOpen,
  onClose,
  video,
  playlists,
  onAddVideoToPlaylist,
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Add to playlist</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        {playlists.length===0 ? <PlaylistModal isOpen={isOpen} onClose={onClose} />  :   playlists.map(playlist => (
          <Box key={playlist.id}>
            <Text>{playlist.name}</Text>
            <Button onClick={() => onAddVideoToPlaylist(playlist.id, video)}>
              Add
            </Button>
          </Box>
        ))}
      </ModalBody>
    </ModalContent>
  </Modal>
);
export default SinglePlaylistModal;