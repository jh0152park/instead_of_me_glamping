import { Box, HStack, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { go_to_top } from "../utils";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { scrollY } = useScroll();
    const navigation = useNavigate();
    const [fillBG, setFillBG] = useState(false);

    type TMenus =
        | "HOME"
        | "ROOM"
        | "SPECIAL"
        | "SIGHT SEEING"
        | "RESERVATION"
        | "USER GUIDE";

    const menus: TMenus[] = [
        "HOME",
        "ROOM",
        "SPECIAL",
        "SIGHT SEEING",
        "RESERVATION",
        "USER GUIDE",
    ];

    interface IPath {
        HOME: string;
        ROOM: string;
        SPECIAL: string;
        "SIGHT SEEING": string;
        RESERVATION: string;
        "USER GUIDE": string;
    }

    const paths: IPath = {
        HOME: "/",
        ROOM: "/room",
        SPECIAL: "/special",
        "SIGHT SEEING": "/sight",
        RESERVATION: "/reservation",
        "USER GUIDE": "/userguide",
    };

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setFillBG(true);
        } else {
            setFillBG(false);
        }
    });

    function onMenuClick(menu: TMenus) {
        if (menus.includes(menu)) {
            go_to_top(0);
            navigation(paths[menu]);
        }
    }

    return (
        <Box
            w="100%"
            h="70px"
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            position="fixed"
            top={0}
            zIndex={99}
            px="20px"
            bgColor={fillBG ? "rgba(255, 255, 255, 0.7)" : "none"}
            transition="all 0.2s linear"
        >
            <HStack w="100%" h="100%" justifyContent="flex-end" spacing="20px">
                {menus.map((menu, index) => (
                    <Text
                        key={index}
                        fontWeight="bold"
                        color={fillBG ? "black" : "whitesmoke"}
                        _hover={{
                            cursor: "pointer",
                            color: fillBG
                                ? "rgba(0, 0, 0, 0.4)"
                                : "rgba(255, 255, 255, 0.4)",
                        }}
                        transition="all 0.2s linear"
                        onClick={() => onMenuClick(menu)}
                    >
                        {menu}
                    </Text>
                ))}
            </HStack>
        </Box>
    );
}
