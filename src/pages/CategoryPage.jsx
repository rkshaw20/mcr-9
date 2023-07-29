import { Flex, Heading } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/DataContextProvider";
import VideoCard from "../components/VideoCard";

const CategoryPage=()=>{
    const {categoryName}=useParams();
    const {videos}=useDataContext();

    const filteredData=videos.filter((item)=>item.category===categoryName);
    return(
        <Flex flexDir='column' >
            <Heading>{categoryName}</Heading>
            <Flex flexWrap='wrap' gap={2} mt={2} >
                {filteredData?.map((video)=>(
                    <VideoCard key={video._id} video={video} />
                ))}
            </Flex>
        </Flex>
    )
}
export default CategoryPage;