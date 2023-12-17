import { Box, Grid, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";
import SplitItem from "../components/Home/SplitItem";

export default function SightSeeing() {
    const datas = [
        {
            title: "드넓은 목장",
            image: require("../resource/pasture.jpg"),
        },
        {
            title: "겨울 액티비티",
            image: require("../resource/ski.jpg"),
        },
        {
            title: "서퍼 비치",
            image: require("../resource/surfing.jpg"),
        },
        {
            title: "풍력 발전 단지",
            image: require("../resource/wind_plant.jpg"),
        },
        {
            title: "최상급 특산품",
            image: require("../resource/beef.jpg"),
        },
        {
            title: "시원한 계곡",
            image: require("../resource/waterfall.jpg"),
        },
    ];

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <VStack w="100%" minH="100vh">
                <TopBanner title="Attractions" subtitle="주변 광광지" />

                <Box
                    w="100%"
                    h="100vh"
                    mt="200px"
                    bgColor="whitesmoke"
                    overflow="hidden"
                    boxSizing="border-box"
                >
                    <Grid
                        templateColumns="repeat(3, 1fr)"
                        templateRows="repeat(2, 1fr)"
                        h="100%"
                    >
                        {datas.map((data, index) => (
                            <SplitItem
                                key={index}
                                image={data.image}
                                title={data.title}
                            />
                        ))}
                    </Grid>
                </Box>
            </VStack>
        </>
    );
}
