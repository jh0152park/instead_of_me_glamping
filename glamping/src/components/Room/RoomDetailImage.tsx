import { Grid, GridItem } from "@chakra-ui/react";

export default function RoomDetailImage({ roomInsde }: { roomInsde: string }) {
    const bbqImage = require("../../resource/bbq.jpg");
    const poolImage = require("../../resource/pool.jpg");
    const roomImage = require("../../resource/room.jpg");
    const fireImage = require("../../resource/fire3.jpg");
    const SCREEN_WIDTH = window.document.documentElement.clientWidth;

    return (
        <Grid
            w={`${SCREEN_WIDTH * 0.8}px`}
            h={`${SCREEN_WIDTH * 0.8 * 0.5}px`}
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap="10px"
            mb="50px"
        >
            <GridItem
                colSpan={1}
                rowSpan={2}
                bgImage={roomInsde}
                bgSize={"cover"}
                bgPosition={"center center"}
            ></GridItem>
            <GridItem
                bg={"black"}
                colSpan={1}
                bgImage={bbqImage}
                bgSize={"cover"}
                bgPosition={"center center"}
            ></GridItem>
            <GridItem
                bg={"black"}
                colSpan={1}
                bgImage={fireImage}
                bgSize={"cover"}
                bgPosition={"center bottom"}
            ></GridItem>
            <GridItem
                bg={"black"}
                colSpan={1}
                bgImage={poolImage}
                bgSize={"cover"}
                bgPosition={"center left"}
            ></GridItem>
            <GridItem
                bg={"black"}
                colSpan={1}
                bgImage={roomImage}
                bgSize={"cover"}
                bgPosition={"center center"}
            ></GridItem>
        </Grid>
    );
}
