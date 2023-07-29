import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';
import { MdWatchLater } from 'react-icons/md';
import { Link as ReachLink } from 'react-router-dom';
import { useDataContext } from '../context/DataContextProvider';
import { TYPE } from '../utils/constants';
import { isWatchList } from '../utils/utils';

const VideoCard = ({ video }) => {
  const { watchLater, dispatch } = useDataContext();
 
//   const removeFromWatchLater = () => {};

  const isInWatchLater = isWatchList(watchLater, video._id);

  const HandleAddToWatchLater = () => {
    isInWatchLater
      ? dispatch({ type: TYPE.REMOVE_FROM_WATCH_LATER,payload:video })
      : dispatch({type:TYPE.ADD_TO_WATCH_LATER,payload:video});
  };

  return (
    <Card w="300px">
        <CardBody>
          <Image
            src={video?.thumbnail}
            alt={video?.title}
            h="200px"
            w="280px"
            position="relative"
          />
          <Icon
            as={MdWatchLater}
            boxSize="2.5rem"
            position="absolute"
            top="1.2rem"
            right="1rem"
            onClick={()=>HandleAddToWatchLater()}
          />
        </CardBody>
        <Link as={ReachLink} to={`/video/${video._id}`}>
        <CardFooter>
          <Flex>
            <Flex flexDir="column">
              <Heading size="sm">{video?.title}</Heading>
              <Text>{video?.category}</Text>
              <Text color="gray.400">
                {video?.views} Views | {video?.creator}
              </Text>
            </Flex>
          </Flex>
        </CardFooter>
      </Link>
    </Card>
  );
};
export default VideoCard;
// _id: 31,
// title: 'Origami Elephant - Step-by-Step Tutorial',
// views: 2879,
// chips: ['origami', 'elephant', 'paper', 'tutorial'],
// thumbnail: 'https://picsum.photos/307/174',
// src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
// category: 'Origami',
// creator: 'OrigamiWonderland',
