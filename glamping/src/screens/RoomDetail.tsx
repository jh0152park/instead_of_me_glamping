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
import DetailRoomImage from "../components/Room/RoomDetailImage";
import RoomDetailInstruction from "../components/Room/RoomDetailInstruction";
import RoomDetailInformation from "../components/Room/RoomDetailInformation";
import { useRecoilValue } from "recoil";
import { currentMode } from "../ProjectCommon";
import RoomDetailInformationMobile from "../components/Room/RoomDetailInformationMobile";
import { Helmet } from "react-helmet";

export default function RoomDetail() {
    const navigation = useNavigate();
    const roomId = useParams().roomId;
    const room = datas.find((r) => r.id === roomId);
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;

    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

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

                        {isMobile ? (
                            <RoomDetailInformationMobile room={room as IData} />
                        ) : (
                            <RoomDetailInformation room={room as IData} />
                        )}
                    </VStack>
                </Center>
            </VStack>
        </>
    );
}
