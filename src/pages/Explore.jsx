import { Flex, Heading } from "@chakra-ui/react"
import { useDataContext } from "../context/DataContextProvider";
import VideoCard from "../components/VideoCard";

const Explore=()=>{
    const {videos}=useDataContext()
    return (
        <Flex flexDirection="column"
        gap={2}
        m=".5rem"
        h="full"
        w="full" >
        <Heading>Explore</Heading>
        <Flex flexWrap='wrap' gap={2} >
        {videos.map((video)=>(
            <VideoCard key={video._id} video={video} />
        ))}
        </Flex>
        
        </Flex>
    )
}
export default Explore;