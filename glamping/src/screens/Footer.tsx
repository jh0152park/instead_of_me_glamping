import { Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <Center w="100%" h="100px" bgColor="white">
            <Text
                fontSize="10px"
                color="rgba(0, 0, 0, 0.6)"
                _hover={{ cursor: "pointer", color: "rgba(0, 0, 0, 1)" }}
                transition="all 0.2s linear"
                onClick={() => {
                    navigate("/license");
                }}
            >
                Image license
            </Text>
        </Center>
    );
}
