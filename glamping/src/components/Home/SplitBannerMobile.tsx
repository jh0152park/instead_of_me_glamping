import { Box, Center, Grid, Heading, Image } from "@chakra-ui/react";
import SplitItem from "./SplitItem";
import { title } from "process";
import SplitItemMobile from "./SplitItemMobile";

export default function SplitBannerMobile() {
    const datas = [
        {
            title: "힐링되는 되는 뷰",
            image: require("../../resource/landscape3.jpg"),
        },
        {
            title: "아늑한 분위기의 텐트",
            image: require("../../resource/tent.jpg"),
        },
        {
            title: "청결한 내부시설",
            image: require("../../resource/room.jpg"),
        },
        {
            title: "자연에서의 식사",
            image: require("../../resource/bbq.jpg"),
        },
    ];

    return (
        <Box
            w="100%"
            h="100vh"
            bgColor="whitesmoke"
            overflow="hidden"
            boxSizing="border-box"
        >
            <Grid
                templateColumns="repeat(1, 1fr)"
                templateRows="repeat(4,1fr)"
                h="100%"
            >
                {datas.map((data, index) => (
                    <SplitItemMobile
                        key={index}
                        image={data.image}
                        title={data.title}
                    />
                ))}
            </Grid>
        </Box>
    );
}
