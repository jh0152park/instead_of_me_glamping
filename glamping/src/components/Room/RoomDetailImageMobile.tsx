import { Image, VStack } from "@chakra-ui/react";

export default function RoomDetailImageMobile({
    roomInsde,
}: {
    roomInsde: string;
}) {
    const bbqImage = require("../../resource/bbq.jpg");
    const poolImage = require("../../resource/pool.jpg");
    const roomImage = require("../../resource/room.jpg");
    const fireImage = require("../../resource/fire3.jpg");

    const SCREEN_WIDTH = window.document.documentElement.clientWidth;
    const images = [roomInsde, bbqImage, poolImage, roomImage, fireImage];

    return (
        <VStack spacing="50px">
            {images.map((image, index) => (
                <Image
                    key={index}
                    w={`${SCREEN_WIDTH * 0.8}px`}
                    h={`${SCREEN_WIDTH * 0.8}px`}
                    src={image}
                />
            ))}
        </VStack>
    );
}
