import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function PreviewMobile() {
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;
    const landscape = require("../../resource/landscape.jpg");
    const bbq = require("../../resource/bbq2.jpg");
    const room = require("../../resource/room2.jpg");
    const pool = require("../../resource/pool.jpg");
    const wine = require("../../resource/wine.jpg");
    const village = require("../../resource/village2.jpg");
    const images = [landscape, bbq, room, pool, wine, village];

    return (
        <Box w="100%" minH="100vh" px={`${SCREEN_WIDTH * 0.1}px`} mb="150px">
            <VStack w="100%" alignItems="flex-end" mt="50px">
                <Heading>글램핑 미리보기</Heading>
                <Text>해발 1,000m에 위치한 글램핑장</Text>
                <Text>이곳에서 잊지못할 기억을 만들고 가시길바랍니다.</Text>
            </VStack>

            <VStack mt="50px" spacing="30px">
                {images.map((image, index) => (
                    <Image
                        key={index}
                        w="100%"
                        h={`${SCREEN_WIDTH * 0.7}px`}
                        src={image}
                        objectFit="cover"
                    />
                ))}
            </VStack>
        </Box>
    );
}
