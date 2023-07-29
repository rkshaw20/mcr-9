import {
    Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDataContext } from '../context/DataContextProvider';
import { TYPE } from '../utils/constants';

const PlaylistModal = ({isOpen, onClose}) => {

    const {dispatch}=useDataContext();

  const [input, setInput] = useState('');
  const handleInputChange = e => {
    const value = e.target.value;
    setInput(value.trim());
  };
  
const handleFormSubmit=(e)=>{
e.preventDefault();
dispatch({type:TYPE.CREATE_NEW_PLAYLIST,payload:input})
setInput('');
onClose();
}
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalContent>
          <ModalHeader>Add to playlist</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleFormSubmit} >

            <Input
              placeholder="playlist name"
              isRequired
              onChange={handleInputChange}
            />
            <Button type='submit' >Create New Playlist</Button>
            </form>

          </ModalBody>
        </ModalContent>
      </ModalContent>
    </Modal>
  );
};

export default PlaylistModal;
