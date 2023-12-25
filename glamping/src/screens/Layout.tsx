import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useRecoilValue } from "recoil";
import { currentMode } from "../ProjectCommon";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer";

export default function Layout() {
    const isMobile = useRecoilValue(currentMode) === "mobile";

    return (
        <>
            {isMobile ? <HeaderMobile /> : <Header />}
            <Outlet />
            <Footer />
        </>
    );
}
