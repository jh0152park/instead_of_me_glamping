import { useNavigate, useParams } from "react-router-dom";
import { datas } from "../components/Room/RoomData";
import {
    Center,
    Grid,
    GridItem,
    HStack,
    Heading,
    VStack,
} from "@chakra-ui/react";
import TopBanner from "../components/Room/TopBanner";

export default function RoomDetail() {
    const roomId = useParams().roomId;
    const room = datas.find((r) => r.id === roomId);
    const bbqImage = require("../resource/bbq.jpg");
    const poolImage = require("../resource/pool.jpg");
    const roomImage = require("../resource/room.jpg");
    const fireImage = require("../resource/fire3.jpg");
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;

    const navigation = useNavigate();

    return (
        <VStack w="100%" minH="100vh">
            <TopBanner title={room?.name as string} />

            <Center px={`${SCREEN_WIDTH * 0.1}px`} my="200px">
                <VStack alignItems="flex-start">
                    <Heading
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(0, 0, 0, 0.5)",
                        }}
                        transition="all 0.2s linear"
                        onClick={() => {
                            navigation(-1);
                        }}
                    >
                        뒤로가기
                    </Heading>
                    <HStack>
                        <Grid
                            w={`${SCREEN_WIDTH * 0.6}px`}
                            h={`${SCREEN_WIDTH * 0.6 * 0.5}px`}
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(3, 1fr)"
                            gap="10px"
                        >
                            <GridItem
                                colSpan={1}
                                rowSpan={2}
                                bgImage={room?.image}
                                bgSize={"cover"}
                                bgPosition={"center center"}
                            ></GridItem>
                            <GridItem
                                bg={"black"}
                                colSpan={1}
                                bgImage={bbqImage}
                                bgSize={"cover"}
                                bgPosition={"center center"}
                            ></GridItem>
                            <GridItem
                                bg={"black"}
                                colSpan={1}
                                bgImage={fireImage}
                                bgSize={"cover"}
                                bgPosition={"center bottom"}
                            ></GridItem>
                            <GridItem
                                bg={"black"}
                                colSpan={1}
                                bgImage={poolImage}
                                bgSize={"cover"}
                                bgPosition={"center left"}
                            ></GridItem>
                            <GridItem
                                bg={"black"}
                                colSpan={1}
                                bgImage={roomImage}
                                bgSize={"cover"}
                                bgPosition={"center center"}
                            ></GridItem>
                        </Grid>
                    </HStack>
                </VStack>
            </Center>
        </VStack>
    );
}
