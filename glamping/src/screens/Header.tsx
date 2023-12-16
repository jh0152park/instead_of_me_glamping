import { Box, HStack, Text } from "@chakra-ui/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header() {
    const { scrollY } = useScroll();
    const [fillBG, setFillBG] = useState(false);
    const menus = [
        "ROOM",
        "SPECIAL",
        "SIGHT SEEING",
        "RESERVATION",
        "USER GUIDE",
    ];

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setFillBG(true);
        } else {
            setFillBG(false);
        }
    });

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
                    >
                        {menu}
                    </Text>
                ))}
            </HStack>
        </Box>
    );
}
