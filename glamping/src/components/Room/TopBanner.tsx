import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function TopBanner({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    const topImage = require("../../resource/landscape5.jpg");

    return (
        <Center
            w="100%"
            h="500px"
            bgImage={topImage}
            bgSize={"cover"}
            bgPosition={"center center"}
        >
            <VStack>
                <Heading>{title}</Heading>
                <Text fontWeight="bold">{subtitle}</Text>
            </VStack>
        </Center>
    );
}
