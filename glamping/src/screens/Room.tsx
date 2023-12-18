import { Box, Center, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";
import Product from "../components/Room/Product";
import { datas } from "../components/Room/RoomData";
import { useRecoilValue } from "recoil";
import { currentMode } from "../ProjectCommon";
import RoomPreview from "../components/Room/RoomPreview";
import RoomPreviewMobile from "../components/Room/RoomPreviewMobile";

export default function Room() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <TopBanner title="ROOM" subtitle="객실안내" />
            <Center w="100%" minH="100vh" my="100px">
                {isMobile ? <RoomPreviewMobile /> : <RoomPreview />}
            </Center>
        </>
    );
}
