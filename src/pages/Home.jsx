import { Flex, Heading } from '@chakra-ui/react';
import { useDataContext } from '../context/DataContextProvider';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  const { categories } = useDataContext();
  return (
    <Flex
      flexDirection="column"
      gap={2}
      m=".5rem"
      h="full"
      w="full"
    >
      <Heading>Categories</Heading>
      <Flex m=".5rem" h="full" w="full"       flexWrap="wrap"
>
        {categories.map(category => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Home;
