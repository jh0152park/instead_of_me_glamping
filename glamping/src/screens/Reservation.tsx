import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";
import { useRecoilValue } from "recoil";
import { currentMode } from "../ProjectCommon";

export default function Reservation() {
    const bookingUrl = "https://booking.naver.com/";
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <TopBanner title="Reservation" subtitle="실시간 예약하기" />
            <Center w="100%" h="100%" mt="100px">
                <Box>
                    <Text
                        textAlign="center"
                        color="green.300"
                        fontWeight="bold"
                        fontSize={isMobile ? "20px" : "40px"}
                        _hover={{
                            color: "green.500",
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                        transition="all 0.2s linear"
                        onClick={() => {
                            window.open(bookingUrl);
                        }}
                    >
                        네이버를 통해 실시간 예약하러 가기
                    </Text>
                </Box>
            </Center>
        </>
    );
}
