import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import Badge from "./Badge";

export default function AdBoardMobile() {
    const image = require("../../resource/village.jpg");
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;

    const datas = [
        {
            title: "깨끗한 개별 화장실",
            description:
                "안심하고 사용하실 수 있는 청결에 신경쓰고 있는 개별 화장실 입니다.",
            image: require("../../resource/toilet.jpg"),
        },
        {
            title: "야외수영장",
            description:
                "무더운 여름 귀여운 아이들과 함께 안전하게 물놀이를 즐길수 있습니다.",
            image: require("../../resource/pool.jpg"),
        },
        {
            title: "청결한 주방식기",
            description:
                "청결한 주방식기로 안심하고 식사를 즐기실 수 있습니다.",
            image: require("../../resource/kitchen.jpg"),
        },
    ];

    return (
        <Center w="100%" minH="100vh" pt="50px">
            <VStack>
                <Center
                    w={`${SCREEN_WIDTH * 0.9}px`}
                    h={`${SCREEN_WIDTH * 0.9}px`}
                    bgImage={image}
                    bgPosition={"center center"}
                    bgSize={"cover"}
                >
                    <Text
                        textAlign="center"
                        fontWeight="bold"
                        fontSize="25px"
                        color="whitesmoke"
                    >
                        밤하늘을 수놓은 별들과 함께 느끼는 아름다운 자연
                    </Text>
                </Center>

                <Heading mt="23px">STAY IN THE HERE</Heading>
                <Text>
                    Instead of me 글램핑, 수 많은 별들을 눈에 담아가는 공간
                </Text>

                <VStack my="100px" spacing="50px">
                    {datas.map((data, index) => (
                        <Badge
                            key={index}
                            image={data.image}
                            title={data.title}
                            description={data.description}
                            screenWidth={SCREEN_WIDTH * 0.8}
                        />
                    ))}
                </VStack>
            </VStack>
        </Center>
    );
}
