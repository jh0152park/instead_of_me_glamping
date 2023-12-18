import { VStack } from "@chakra-ui/react";
import { IRoom } from "./RoomData";
import RoomDetailImage from "./RoomDetailImage";
import RoomDetailInstruction from "./RoomDetailInstruction";

export default function RoomDetailInformation({ room }: IRoom) {
    return (
        <VStack alignItems="flex-start">
            <RoomDetailImage roomInsde={room?.image as string} />
            <RoomDetailInstruction
                area={room?.area as number}
                maximum={room?.maximum as number}
                minimum={room?.minimum as number}
            />
        </VStack>
    );
}
