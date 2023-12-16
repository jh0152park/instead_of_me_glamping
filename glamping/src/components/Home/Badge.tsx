import { Box, Image, Text, VStack } from "@chakra-ui/react";

interface IProps {
    title: string;
    image: string;
    description: string;
    screenWidth?: number;
}

export default function Badge({
    screenWidth,
    title,
    description,
    image,
}: IProps) {
    return (
        <Box
            w={screenWidth}
            h={screenWidth}
            mx="10px"
            border="1px solid rgba(0, 0, 0, 0.2)"
            boxSizing="border-box"
            overflow="hidden"
        >
            <Image
                w="100%"
                h="60%"
                objectFit="cover"
                src={image}
                _hover={{ cursor: "pointer", transform: ["scale(1.05)"] }}
                transition="all 0.2s linear"
            />
            <VStack alignItems="flex-start" p="20px">
                <Text fontWeight="bold" fontSize="20px">
                    {title}
                </Text>
                <Text>{description}</Text>
            </VStack>
        </Box>
    );
}
