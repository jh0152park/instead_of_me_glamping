import { Box, Center, Heading, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";

export default function Reservation() {
    const bookingUrl = "https://booking.naver.com/";

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <TopBanner title="Reservation" subtitle="실시간 예약하기" />
            <Center w="100%" h="100%" mt="100px">
                <Box>
                    <Heading
                        color="green.300"
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
                    </Heading>
                </Box>
            </Center>
        </>
    );
}
