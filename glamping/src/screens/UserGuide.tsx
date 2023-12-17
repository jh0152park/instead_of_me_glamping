import { VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import TopBanner from "../components/Room/TopBanner";

export default function UserGuide() {
    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <TopBanner title="고객 이용 사항" subtitle="이용안내" />
        </>
    );
}
