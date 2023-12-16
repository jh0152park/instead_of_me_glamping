import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled(motion.img)<{ height: number }>`
    width: 100%;
    height: ${(props) => props.height}px;
    object-fit: cover;
    position: absolute;
    top: 0;
`;

const ImageVariants = {
    initial: {
        // x: window.screen.availWidth,
        opacity: 0,
        zIndex: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        zIndex: 1,
    },
    exit: {
        // x: -window.screen.availWidth,
        opacity: 0,
        zIndex: 0,
    },
};

export default function Banner() {
    const [imageIndex, setImageIndex] = useState(0);
    const SCREEN_HEIGHT = window.document.documentElement.clientHeight;

    const images = [
        require("../../resource/night_village.jpg"),
        require("../../resource/dog.jpg"),
        require("../../resource/landscape4.jpg"),
        require("../../resource/bbq3.jpg"),
        require("../../resource/fire4.jpg"),
    ];

    function updateImageIndex() {
        setImageIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
    }

    useEffect(() => {
        setTimeout(updateImageIndex, 5 * 1 * 1000);
    }, [imageIndex]);

    return (
        <Center w="100%" h={`${SCREEN_HEIGHT}px`}>
            <AnimatePresence initial={false}>
                {images.map((image, index) =>
                    index === imageIndex ? (
                        <Image
                            key={index}
                            src={image}
                            height={SCREEN_HEIGHT}
                            variants={ImageVariants}
                            initial="initial"
                            animate="visible"
                            exit="exit"
                            transition={{
                                duration: 1.5,
                            }}
                        />
                    ) : null
                )}
            </AnimatePresence>

            <VStack zIndex={98} color={"whitesmoke"} spacing={0}>
                <Heading
                    fontSize="50px"
                    textShadow="-3px 0px black, 0px 3px black, 3px 0px black, 0px -3px black"
                >
                    Welcome to the Instead of glamping
                </Heading>
                <Text
                    fontWeight="bold"
                    textShadow="-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black"
                >
                    우리 글램핑장에 오신 것을 환영합니다
                </Text>
            </VStack>
        </Center>
    );
}
