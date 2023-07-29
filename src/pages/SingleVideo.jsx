import { Box, Divider, Flex, Heading, Icon } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../context/DataContextProvider';
import {
  MdPlaylistAdd,
  PiNotePencilDuotone,
  MdWatchLater,
} from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';

const SingleVideo = ({ video }) => {
  const { videoId } = useParams();
  const { videos } = useDataContext();

  const videoData = videos.find(item => item._id === +videoId);
  if (!videoData) {
    return;
  }

  return (
    <Flex h="full">
      <Flex flexDir="column" m="1rem" >
        <Flex w="700px" h="400px">

        <video controls>
          <source src={videoData.src} type="video/mp4" preload="auto" />
        </video>
        </Flex>

        <Flex w="full" m={2} justifyContent="space-between">
          <Heading size="md">{videoData.title}</Heading>
          <Flex gap={2}>
            <Icon as={MdWatchLater} />
            <Icon as={MdPlaylistAdd} />
            <Icon as={AiFillEdit} />
          </Flex>
        </Flex>
        <Divider/>
        <Flex>
            <Heading>Notes</Heading>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default SingleVideo;

// _id: 25,
// title: 'Origami Crane Mobile - DIY Home Decor',
// views: 2251,
// chips: ['origami', 'crane', 'mobile', 'paper', 'home decor'],
// thumbnail: 'https://picsum.photos/301/174',
// src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
// category: 'Origami',
// creator: 'HomeCraftHacks',
