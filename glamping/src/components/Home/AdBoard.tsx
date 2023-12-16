import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function AdBoard() {
    const pool = require("../../resource/pool.jpg");
    const image = require("../../resource/village.jpg");
    const toilet = require("../../resource/toilet.jpg");
    const kitchen = require("../../resource/kitchen.jpg");
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;

    return (
        <Center w="100%" minH="100vh">
            <VStack>
                <Center
                    w={`${SCREEN_WIDTH * 0.7}px`}
                    h={`${SCREEN_WIDTH * 0.7 * 0.55}px`}
                    bgImage={image}
                    bgSize={"cover"}
                >
                    <Heading fontSize="25px" color="whitesmoke">
                        밤하늘을 수놓은 별들과 함께 느끼는 아름다운 자연
                    </Heading>
                </Center>

                <Heading mt="23px">STAY IN THE HERE</Heading>
                <Text>
                    Instead of me 글램핑, 수 많은 별들을 눈에 담아가는 공간
                </Text>
            </VStack>
        </Center>
    );
}
