import { Helmet } from "react-helmet";
import Banner from "../components/Home/Banner";

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Instead of me 글램핑</title>
            </Helmet>

            <Banner />
        </>
    );
}
