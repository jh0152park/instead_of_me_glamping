import { Box, Center, Grid, Heading, Image } from "@chakra-ui/react";

export default function SplitBanner() {
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
            <Grid templateColumns="repeat(4, 1fr)" h="100%">
                {datas.map((data, index) => (
                    <Center
                        h="100%"
                        key={index}
                        overflow="hidden"
                        boxSizing="border-box"
                    >
                        <Box
                            w="100%"
                            h="100%"
                            bgImage={data.image}
                            bgSize={"cover"}
                            bgPosition={"center center"}
                            _hover={{
                                cursor: "pointer",
                                transform: ["scale(1.05)"],
                            }}
                            transition="all 0.2s linear"
                        >
                            <Center
                                w="100%"
                                h="100%"
                                _hover={{
                                    bgColor: "rgba(0, 0, 0, 0.5)",
                                }}
                            >
                                <Heading color="whitesmoke" fontSize="30px">
                                    {data.title}
                                </Heading>
                            </Center>
                        </Box>
                    </Center>
                ))}
            </Grid>
        </Box>
    );
}
