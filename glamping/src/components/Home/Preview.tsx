import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export default function Preview() {
    // landscape, bbq2, room2, pool, wine, village2
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;
    const landscape = require("../../resource/landscape.jpg");
    const bbq = require("../../resource/bbq2.jpg");
    const room = require("../../resource/room2.jpg");
    const pool = require("../../resource/pool.jpg");
    const wine = require("../../resource/wine.jpg");
    const village = require("../../resource/village2.jpg");

    return (
        <Box w="100%" minH="100vh" px={`${SCREEN_WIDTH * 0.1}px`} mb="150px">
            <VStack w="100%" alignItems="flex-end" mt="50px">
                <Heading>Instead of me글램핑 미리보기</Heading>
                <Text>해발 1,000m에 위치한 글램핑장</Text>
                <Text>이곳에서 잊지못할 기억을 만들고 가시길 바랍니다.</Text>
            </VStack>

            <VStack>
                <Box w="100%" mt="100px" display="flex" justifyContent="center">
                    <Image
                        w="100%"
                        h={`${SCREEN_WIDTH * 0.7 * 0.6}px`}
                        src={landscape}
                        objectFit="cover"
                    />
                </Box>

                <HStack w="100%" mt="100px">
                    <Box w="50%">
                        <Image w="100%" h="500px" src={bbq} objectFit="cover" />
                    </Box>
                    <Box w="50%">
                        <Image
                            w="100%"
                            h="500px"
                            src={room}
                            objectFit="cover"
                        />
                    </Box>
                </HStack>

                <HStack w="100%" mt="100px">
                    <Box w="33%">
                        <Image
                            w="100%"
                            h="300px"
                            src={pool}
                            objectFit="cover"
                        />
                    </Box>
                    <Box w="33%">
                        <Image
                            w="100%"
                            h="300px"
                            src={wine}
                            objectFit="cover"
                        />
                    </Box>
                    <Box w="33%">
                        <Image
                            w="100%"
                            h="300px"
                            src={village}
                            objectFit="cover"
                        />
                    </Box>
                </HStack>
            </VStack>
        </Box>
    );
}
