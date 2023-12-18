import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";
import { Box } from "@chakra-ui/react";
import AdBoard from "../components/Home/AdBoard";
import SplitBanner from "../components/Home/SplitBanner";
import Preview from "../components/Home/Preview";
import { useRecoilValue } from "recoil";
import { currentMode } from "../ProjectCommon";
import BannerMobile from "../components/Home/BannerMobile";

export default function Home() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            {isMobile ? (
                <>
                    <BannerMobile />
                    <AdBoard />
                    <SplitBanner />
                    <Preview />
                </>
            ) : (
                <>
                    <Banner />
                    <AdBoard />
                    <SplitBanner />
                    <Preview />
                </>
            )}
        </>
    );
}
