import { Box, Grid, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";
import SplitItem from "../components/Home/SplitItem";

export default function Special() {
    const datas = [
        {
            title: "개별 화장실",
            image: require("../resource/shower.jpg"),
        },
        {
            title: "밤하늘",
            image: require("../resource/telescope.jpg"),
        },
        {
            title: "야외 수영장",
            image: require("../resource/pool.jpg"),
        },
        {
            title: "신선한 조식",
            image: require("../resource/breakfast.jpg"),
        },
    ];

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <TopBanner title="SPECIAL" subtitle="이곳만의 특별함" />

            <Box
                w="100%"
                h="100vh"
                mt="200px"
                bgColor="whitesmoke"
                overflow="hidden"
                boxSizing="border-box"
            >
                <Grid templateColumns="repeat(4, 1fr)" h="100%">
                    {datas.map((data, index) => (
                        <SplitItem
                            key={index}
                            image={data.image}
                            title={data.title}
                        />
                    ))}
                </Grid>
            </Box>
        </>
    );
}
