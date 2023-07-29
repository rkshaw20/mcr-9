import { Card, CardBody, CardFooter, Image, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
      <Card m=".5rem" h='300px' w='200px' >
        <Link  as={ReachLink} to={`/home/${category.category}`} >
        <CardBody>
          <Image src={category.thumbnail} alt={category.category} h='200px' w='150px' />
        </CardBody>
        <CardFooter>{category.category}</CardFooter>
        </Link>

      </Card>
    
  );
};
export default CategoryCard;

// _id: uuid(),
// thumbnail:
//   'https://i.ytimg.com/vi/3a6A3_08jNo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJzraSVgeIfFINQtGxqh87dVqeZw',
// src: 'https://www.youtube.com/embed/3a6A3_08jNo',
// category: 'Pottery',
