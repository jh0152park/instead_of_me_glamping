import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";
import { Box } from "@chakra-ui/react";
import AdBoard from "../components/Home/AdBoard";
import SplitBanner from "../components/Home/SplitBanner";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <Banner />
            <AdBoard />
            <SplitBanner />
        </>
    );
}
