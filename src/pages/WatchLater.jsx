import { Flex, Heading } from "@chakra-ui/react"
import { useDataContext } from "../context/DataContextProvider";
import VideoCard from "../components/VideoCard";

const WatchLater=()=>{
    const {watchLater}=useDataContext();
    return (
        <Flex flexDir='column' m={2} >
            <Heading fontSize="3xl">Watch Later</Heading>
            <Flex m={2} gap={2} >
                {watchLater && watchLater.map((video)=>(
                    <VideoCard  key={video._id} video={video} />
                ))}
            </Flex>

        </Flex>
    )
}
export default WatchLater;