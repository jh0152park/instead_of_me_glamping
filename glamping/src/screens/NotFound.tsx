import { Center } from "@chakra-ui/react";

export default function NotFound() {
    const image = require("../resource/404image.jpg");
    return (
        <Center
            w="100%"
            h="100vh"
            bgImage={image}
            bgPosition="center center"
        ></Center>
    );
}
