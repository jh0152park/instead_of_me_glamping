import { Center } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Image = styled(motion.img)`
    width: 100%;
    height: 100%;
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
        <Center w="100%" h="100vh">
            <AnimatePresence initial={false}>
                {images.map((image, index) =>
                    index === imageIndex ? (
                        <Image
                            key={index}
                            src={image}
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
        </Center>
    );
}
