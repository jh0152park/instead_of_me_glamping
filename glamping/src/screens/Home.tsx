import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";
import { Box } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <Banner />
            <Box h="200vh"></Box>
        </>
    );
}
