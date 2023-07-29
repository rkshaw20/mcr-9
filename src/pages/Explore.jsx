import { Flex, Heading, Input } from '@chakra-ui/react';
import { useDataContext } from '../context/DataContextProvider';
import VideoCard from '../components/VideoCard';
import { useState } from 'react';

const Explore = () => {
  const { videos } = useDataContext();
  const [input, setInput] = useState('');

  const handleSearch = e => {
    const value = e.target.value;
    setInput(value.trim());
  };

  const filteredData = input.length
    ? videos.filter(
        item => item.title.toLowerCase().includes(input.toLocaleLowerCase())
      )
    : videos;
  return (
    <Flex flexDirection="column" gap={2} m=".5rem" h="full" w="full">
      <Heading>Explore</Heading>
      <Flex>
        <Input
        w='500px'
          type="search"
          placeholder="search...."
          onChange={(e) => handleSearch(e)}
        />
      </Flex>
      <Flex flexWrap="wrap" gap={2}>
        {filteredData.map(video => (
          <VideoCard key={video._id} video={video} />
        ))}
      </Flex>
    </Flex>
  );
};
export default Explore;
