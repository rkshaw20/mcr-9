import { Button, Flex, Heading } from '@chakra-ui/react';
import { useDataContext } from '../context/DataContextProvider';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import { TYPE } from '../utils/constants';

const SinglePlaylist = () => {
  const { playlist, dispatch } = useDataContext();
  const { playlistId } = useParams();

  const playlistToShow = playlist.find(item => item.id === playlistId);
  return (
    <Flex flexDir="column">
      <Heading>sinlge Playlist</Heading>
      <Flex flexWrap="wrap" gap={2} m={2}>
        {playlistToShow &&
          playlistToShow.videos.map(video => (
            <VideoCard
              key={video._id}
              video={video}
              isPlaylistPage
              playlistId={playlistId}
            />
          ))}
      </Flex>
    </Flex>
  );
};

export default SinglePlaylist;
