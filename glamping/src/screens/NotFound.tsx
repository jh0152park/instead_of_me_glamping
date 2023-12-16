import { Center, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { go_to_top } from "../utils";
import { Helmet } from "react-helmet";

export default function NotFound() {
    const image = require("../resource/404image.jpg");
    const navigation = useNavigate();

    return (
        <>
            <Helmet>
                <title>잘못된 페이지 입니다.</title>
            </Helmet>
            <Center
                w="100%"
                h="100vh"
                bgImage={image}
                bgPosition="center center"
                bgSize="cover"
            >
                <VStack color="whitesmoke">
                    <Heading>잘못된 페이지 입니다😭</Heading>
                    <Heading mt="50px">때로는 돌아가는 길이</Heading>
                    <Heading>가장 빠른 길 입니다 :)</Heading>
                    <Heading
                        mt="50px"
                        _hover={{
                            cursor: "pointer",
                            color: "rgba(255,255,255,0.5)",
                        }}
                        transition="all 0.2s linear"
                        onClick={() => {
                            go_to_top(0);
                            navigation("/");
                        }}
                    >
                        돌아가기
                    </Heading>
                </VStack>
            </Center>
        </>
    );
}
