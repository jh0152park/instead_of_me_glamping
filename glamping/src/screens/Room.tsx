import { Box, Center, Grid, Heading, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";
import Product from "../components/Room/Product";
import { datas } from "../components/Room/RoomData";

export default function Room() {
    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <TopBanner title="ROOM" subtitle="객실안내" />
            <Center w="100%" minH="100vh" my="100px">
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
            </Center>
        </>
    );
}
