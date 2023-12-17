import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function TopBanner() {
    const topImage = require("../../resource/landscape5.jpg");

    return (
        <Center
            w="100%"
            h="500px"
            bgImage={topImage}
            bgSize={"cover"}
            bgPosition={"center center"}
        >
            <VStack>
                <Heading>ROOM</Heading>
                <Text fontWeight="bold">객실안내</Text>
            </VStack>
        </Center>
    );
}
