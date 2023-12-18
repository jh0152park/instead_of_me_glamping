import { Box, Center, Heading } from "@chakra-ui/react";

interface IProps {
    image: string;
    title: string;
}

export default function SplitItemMobile({ image, title }: IProps) {
    return (
        <Center h="100%" overflow="hidden" boxSizing="border-box">
            <Box
                w="100%"
                h="100%"
                bgImage={image}
                bgSize={"cover"}
                bgPosition={"center center"}
                // _hover={{
                //     cursor: "pointer",
                //     transform: ["scale(1.05)"],
                // }}
                // transition="all 0.2s linear"
            >
                <Center
                    w="100%"
                    h="100%"
                    bgColor="rgba(0, 0, 0, 0.4)"
                    // _hover={{
                    //     bgColor: "rgba(0, 0, 0, 0.5)",
                    // }}
                >
                    <Heading color="whitesmoke" fontSize="30px">
                        {title}
                    </Heading>
                </Center>
            </Box>
        </Center>
    );
}
