import { Box, Center, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";
import Product from "../components/Room/Product";

export default function Room() {
    const room = require("../resource/inside.jpg");
    const datas = [
        {
            name: "Room A",
            description: "기준2인, 최대3인",
            image: require("../resource/inside.jpg"),
        },
        {
            name: "Room B",
            description: "기준2인, 최대3인",
            image: require("../resource/inside.jpg"),
        },
        {
            name: "Room C",
            description: "기준2인, 최대3인",
            image: require("../resource/inside.jpg"),
        },
        {
            name: "Room D",
            description: "기준3인, 최대4인",
            image: require("../resource/inside.jpg"),
        },
        {
            name: "Room F",
            description: "기준4인, 최대6인",
            image: require("../resource/inside.jpg"),
        },
    ];

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <VStack w="100%" minH="100vh" mb="100px">
                <TopBanner />
                <Grid mt="100px" templateColumns="repeat(3, 1fr)" gap="20px">
                    {datas.map((data, index) => (
                        <Product
                            key={index}
                            name={data.name}
                            description={data.description}
                            image={data.image}
                        />
                    ))}
                </Grid>
            </VStack>
        </>
    );
}
