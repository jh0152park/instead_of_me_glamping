import { useNavigate, useParams } from "react-router-dom";
import { IData, datas } from "../components/Room/RoomData";
import {
    Center,
    Grid,
    GridItem,
    HStack,
    Heading,
    Text,
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
            <TopBanner title={room?.name as string} subtitle="객실안내" />

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
                    <VStack alignItems="flex-start">
                        <Grid
                            w={`${SCREEN_WIDTH * 0.8}px`}
                            h={`${SCREEN_WIDTH * 0.8 * 0.5}px`}
                            templateRows="repeat(2, 1fr)"
                            templateColumns="repeat(3, 1fr)"
                            gap="10px"
                            mb="50px"
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

                        <Text>
                            구조넓이: {room?.area}평(
                            {`${((room?.area as number) * 3.3).toFixed(1)}㎡`})
                        </Text>
                        <Text>
                            구비시설: TV, 침대, 에어컨, 난방기구, 냉장고,
                            취사도구, 전자레인지, 가스레인지, 무선인터넷,
                            일산화탄소 경보기, 소화기
                        </Text>
                        <Text mt="20px">
                            기준인원: 기준 {room?.minimum}명 ~ 최대{" "}
                            {room?.maximum}명 / 최대인원 초과시 1명당 추가요금
                            발생
                        </Text>
                        <Text>성인: 20,000원 / 아동: 10,000원 / 유아: 0원</Text>
                        <Text mt="20px">
                            특이사항: 객실랜덤배정, 추가요금 전화문의 필수
                        </Text>
                    </VStack>
                </VStack>
            </Center>
        </VStack>
    );
}
