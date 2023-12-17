import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface IProps {
    image: string;
    name: string;
    description: string;
}

const SCREEN_WIDTH = window.document.documentElement.clientWidth;

export default function Product({ image, name, description }: IProps) {
    const width = SCREEN_WIDTH * 0.2;
    const height = SCREEN_WIDTH * 0.25;

    return (
        <VStack
            w={width}
            h={height}
            mb="50px"
            alignItems="flex-start"
            _hover={{
                cursor: "pointer",
            }}
        >
            <Box boxSizing="border-box" overflow="hidden">
                <Image
                    w={width}
                    h={width}
                    objectFit="cover"
                    src={image}
                    _hover={{
                        cursor: "pointer",
                        transform: ["scale(1.05)"],
                    }}
                    transition="all 0.2s linear"
                />
            </Box>
            <Heading>{name}</Heading>
            <Text>{description}</Text>
        </VStack>
    );
}
